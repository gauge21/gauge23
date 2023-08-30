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
  Two functions are being hosted on Azure called gauge-functions. Input, which takes information from the Azure database, and Output, which pushes information to the database.
</p>

<h2> Azure </h2>
<p>
  The important part about Azure is to use a consistent subscription. Currently, Subscription 1 has been used to host gauge-functions and gauge23 (gauge2023/gauge23) the database.
</p>

<h2> Next Steps </h2>
<p>
  Going forward, three main things need to be done.
  <ol type="1">
    <li>Re-rendering with React</li>
    <li>SQL Tables</li>
    <li>Charts</li>
  </ol>
  
</p>
  

<h2> Additional Resources </h2>
<p>
  If you are having Firewall Issues
  
  https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure?view=azuresql#from-the-database-overview-page
  
  Create Azure Database
  
  https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?view=azuresql&tabs=azure-portal
  
  Integrate Azure SQL Database into Teams App
  
  https://github.com/OfficeDev/TeamsFx/wiki/Integrate-Azure-SQL-Database-with-your-Teams-app
  
  Turning our function into an API
  
  https://learn.microsoft.com/en-us/azure/azure-functions/functions-openapi-definition
  
  Update or Merge Records in Azure SQL using Azure Function
  
  https://learn.microsoft.com/en-us/azure/stream-analytics/sql-database-upsert
  
  Code Samples
  
  https://learn.microsoft.com/en-us/samples/browse/?products=azure-functions&languages=typescript
  
  Video that explains how Azure SQL works in an App
  
  https://www.youtube.com/watch?v=4gA8Fp2lPBI&ab_channel=MicrosoftReactor
  
  Integrate Azure Function with your Teams App
  
  https://github.com/OfficeDev/TeamsFx/wiki/How-to-integrate-Azure-Functions-with-your-Teams-app
  
  API Connection with Teams App
  
  https://github.com/OfficeDev/TeamsFx/wiki/Integrate-API-Connection-with-your-Teams-app
  
  Good to know Teams Apps
  
  https://learn.microsoft.com/en-gb/microsoftteams/platform/get-started/get-started-overview
  
  https://learn.microsoft.com/en-gb/microsoftteams/platform/toolkit/teamsfx-sdk
  
  https://github.com/OfficeDev/TeamsFx/wiki/Develop-single-sign-on-experience-in-Teams
  
  https://learn.microsoft.com/en-us/graph/sdks/sdks-overview

  Azure SQL
  https://learn.microsoft.com/en-us/azure/azure-sql/database/connect-query-portal?view=azuresql
  
  https://github.com/OfficeDev/TeamsFx/wiki/Integrate-Azure-API-Management-with-your-Teams-App-and-export-the-api-to-power-app
  
  Bicep
  
  https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep
</p>
