# gauge23
<h1> Tools </h1>
<p>
  IDE: VS Code
  Extensions: 
  Teams Toolkit
  https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension
  
  Azure Functions 
  https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions

  Azure Core Tools
  https://learn.microsoft.com/en-gb/azure/azure-functions/functions-run-local?tabs=windows%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-javascript
  
</p>
<h1> Resources </h1>
<p>
  Azure Documentation
  https://learn.microsoft.com/en-us/azure/?product=popular

  Teams App Documentation
  https://learn.microsoft.com/en-gb/microsoftteams/platform/mstdd-landing

  Azure Function Documentation
  https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-v3

  Example Teams App Tabs using Teams Toolkit

  
  ![unnamed](https://github.com/gauge21/gauge23/assets/117139223/01fb9480-7a0f-4bde-83a8-e8f816bef258)

  
</p>
<h2> Gauge </h2>
<p>
  The Gauge component handles the emotion gauge, submitting, and the gauge animation. The Azure Function that Gauge uses is called Output. All components are controlled using React.
</p>
  
<h2> Function </h2>
<p>
  Two functions are being hosted on Azure called gauge-functions. Input, which takes information from the Azure database, and Output, which pushes information to the database. To call the functions, an API call using axios is used instead of jquery.
</p>

<h2> Azure </h2>
<p>
  The important part about Azure is to use a consistent subscription. Currently, Subscription 1 has been used to host gauge-functions and gauge23 (gauge2023/gauge23) the database.
</p>

<h2> Next Steps </h2>
<p>
  Going forward, 2 main things need to be done.
  <ol type="1">
    <li>SQL Tables</li>
    <li>Charts</li>
    <li>Functions</li>
  </ol>
  For SQL Tables, this requires a separate table that would update and store emotion values based on the date. Additionally, this would require the creation/usage of personal IDs for each user. With a randomly generated unique ID, the emotion table can be joined in SQL.

  For the charts, re-rendering using useEffect and JSON conversion to create an array that can be passed through into the charts.  

  For functions, the ability to call an SQL script where a specific user's information can be pulled. This needs further research as finding information about using a Typescript function to pass a parameter into JSON was difficult. This would be used in accessing information for charts. 
</p>
  

<h2> Additional Resources </h2>
<p>
  <b>If you are having Firewall Issues</b>
  <li>
    https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure?view=azuresql#from-the-database-overview-page
  </li>
  <br> </br>

  
  <b>Create Azure Database</b>
  <li>
    https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?view=azuresql&tabs=azure-portal
  </li>
  <br> </br>
  
  <b>Integrate Azure SQL Database into Teams App</b>
  <li>
    https://github.com/OfficeDev/TeamsFx/wiki/Integrate-Azure-SQL-Database-with-your-Teams-app
  </li>
  <br> </br>
  
  <b>Turning our function into an API</b>
  <li>
    https://learn.microsoft.com/en-us/azure/azure-functions/functions-openapi-definition
  </li>
  <br> </br>
  
  <b>Update or Merge Records in Azure SQL using Azure Function</b>
  <li>
    https://learn.microsoft.com/en-us/azure/stream-analytics/sql-database-upsert
  </li>
  <br> </br>
  
  <b>Code Samples</b>
  <li>
     https://learn.microsoft.com/en-us/samples/browse/?products=azure-functions&languages=typescript
  </li>
  <br> </br>
  
  <b>Video that explains how Azure SQL works in an App</b>
  <li>
     https://www.youtube.com/watch?v=4gA8Fp2lPBI&ab_channel=MicrosoftReactor
  </li>
  <br> </br>
  
  <b>Integrate Azure Function with your Teams App</b>
  <li>
    https://github.com/OfficeDev/TeamsFx/wiki/How-to-integrate-Azure-Functions-with-your-Teams-app
  </li>
  <br> </br>
  
  <b>API Connection with Teams App</b>
  <li>
    https://github.com/OfficeDev/TeamsFx/wiki/Integrate-API-Connection-with-your-Teams-app
  </li>
  <br> </br>
  
  <b>Good to know Teams Apps</b>
  <li>
    https://learn.microsoft.com/en-gb/microsoftteams/platform/get-started/get-started-overview
  </li>
  <li>
    https://learn.microsoft.com/en-gb/microsoftteams/platform/toolkit/teamsfx-sdk
  </li>
  <li>
    https://github.com/OfficeDev/TeamsFx/wiki/Develop-single-sign-on-experience-in-Teams
  </li>
  <li>
    https://learn.microsoft.com/en-us/graph/sdks/sdks-overview
  </li>
  <br> </br>
  
  <b>Azure SQL</b>
  <li>
    https://learn.microsoft.com/en-us/azure/azure-sql/database/connect-query-portal?view=azuresql
  </li>
  <li>
    https://github.com/OfficeDev/TeamsFx/wiki/Integrate-Azure-API-Management-with-your-Teams-App-and-export-the-api-to-power-app
  </li>
  <br> </br>
  
  <b>Bicep</b>
  <li>
      https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep
  </li>
  <br> </br>
  
</p>
