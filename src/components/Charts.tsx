import { useState, useEffect, useContext } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { fetchUserData } from "../server/api-clients";
import Chart, { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale);

export default function Charts() {

  const [dataArray, setDataArray] = useState("")
  
  useEffect(() => {
    fetchUserData().then((dataArray) => {
      setDataArray(JSON.stringify(dataArray))
    })
  }, [])


  const chartData = parseInt(dataArray.substring(41,43))
  const date = Date()

  //this is where calculations would go
    const [graphData, setGraphData] = useState({
        label: 'Emotion',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        datasets: [
          {
           
            data: [chartData],
          },
        ],
      });
    const [averageGraphData, setAverageGraphData] = useState({
        label: 'Emotion',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        datasets: [
          {
            id: date,
            label: '',
            data: [chartData],
          },
        ],
    });

    const [highestAverageGraph, setHighestAverageGraph] = useState({
        label: 'Emotion',
        
        datasets: [
          {
            id: date,
            label: '',
            data: [chartData],
          },
        ],
    });

    return (
        <div>
            {/* <h1>{dataArray ?? "Placeholder"}</h1> */}
            <h2> My Logbook </h2>
            <Line 
            data={{
              labels: [date],
              datasets: [
                {
                  label: '',
                  data: [chartData]
                }
              ]
            }} />
            <h2> Daily Average </h2>
            <Line data={{
              labels: [date],
              datasets: [
                {
                  label: '',
                  data: [chartData]
                }
              ]
            }} />
            <h2> Highest Average Emotion Over Past Month </h2>
            <Bar data={{
              labels: [date],
              datasets: [
                {
                  label: '',
                  data: [chartData]
                }
              ]
            }} />
        </div>
    )
}