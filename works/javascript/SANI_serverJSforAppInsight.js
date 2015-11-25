console.time('Application total boot time was'); //logs front to back boot time on server thread
console.time('Modules were loaded in'); // logs load time of included modules
var fs = require('fs'); // this engine requires the fs module
var sql = require('mssql'); //include mssql to hit the SQL Servers for data
//var sql = require('mssql/nofix')  //change mssql to mssql-tedious "must be installed via npm install tds -s"
var async = require('async'); //includes async library
var http = require("http"); //include http for web protocols
var express = require('express'); // express web framework for nodeJS
var router = express.Router(); // express request routing
var app = express(router);  // Creates a new Express application
var bodyParser = require('body-parser'); //body-parser used to read incoming request
var cluster = require('cluster'); // Include the cluster module to run node on each core
var Firebase = require("firebase"); //include Firebase for cl-json
var session = require('express-session'); // express SessionID setter
var MSSQLStore = require('connect-mssql')(session); //sends session or ('express-session') to MSSQLStore
app.use(express.static(__dirname + "/public")); // sets the root directory name, and uses "/public" as the static folder from there
app.use(bodyParser.urlencoded({ extended: true })); //reads encoded urls
app.use(bodyParser.json()); //bodyParser allows JSON posts to be formatted for routing/queries/etc
console.timeEnd('Modules were loaded in');

// END MODULE DECLARATIONS //
//-------------------------------------------------------//

////   PROGRAM BEGINS AS:
//  CALLS OUT TO SQL SERVER - USING  NodeJS + node-MSSQL - Creates an obj "mongoString"

//Setup server configuration settings
var config = {
    user: 'user',  /* Add Your MSSL username */
    password: 'pw',    /*Add Your MSSQL pw \*/
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    //port: '1433',   //portNo if necessary
    database: 'dbName',
    connectionTimeout: 390000,
    requestTimeout: 385000
    //options: { encrypt: false } // Use this if you're on Windows Azure
    //stream: true
};
//Below: "Default connection string when connecting to named instance"
//Driver={SQL Server Native Client 11.0};Server={#{server}\\#{instance}};Database={#{database}};Uid={#{user}};Pwd={#{password}};Trusted_Connection={#{trusted}};

//optional to set the sessions table for the MSSQLStore process below
var options = {   table: 'sessions' };
app.use(session({
    store: new MSSQLStore(config, options), // options can be used from above to declare the "session" table
    secret: 'supersecret'
}));

    //Table to use as session store
    //Needs created @ MSSQL db - USE SCRIPT BELOW:
    /*
    CREATE TABLE [dbo].[sessions](
    [sid] [varchar](255) NOT NULL PRIMARY KEY,
    [session] [varchar](max) NOT NULL,
    [expires] [datetime] NOT NULL)   
    */

var fullquery= 'SELECT * FROM dbo.tblName';
var fullquery1= 'Select * FROM dbo.tblName WHERE name like \'\%nameForWhereClause\%\' ORDER BY valueToOrder ASC';
var fullqueryscm= 'Select * FROM dbo.AppInsight WHERE name like \'\%SCM\%\' ORDER BY PCName ASC';
var fullquerytdtPC= 'Select DISTINCT PCName FROM dbo.AppInsight WHERE name like \'\%TDT\%\' ORDER BY PCName ASC';
var fullqueryentp= 'Select * FROM dbo.AppInsight WHERE name like \'\%ENTP\%\' OR name like \'\%SHIRTS\%\' ORDER BY PCName ASC';
var fullquerymsm= 'SELECT * FROM dbo.byMSM';
var fullqueryservicePC= 'Select DISTINCT PCname as PCName FROM dbo.AppInsight WHERE PCName LIKE \'\%service\%\' ORDER BY PCName ASC';
var badgeTotals = 'SELECT TOP 1 * FROM dbo.AppInsight';
var fullTableList = 'SELECT * FROM AppInsight.dbo.tableList';
var scmQueryArray = {
    config : 'SELECT * FROM SCMVersions',
    agingReport: 'SELECT * FROM dbo.RM_SCM_Aging',
    logErrors: 'SELECT TOP 10 * FROM dbo.scmLogErrors'
};

console.dir(fullTableList);
console.dir(scmQueryArray.config);

var mongoString = {};


var connection = new sql.Connection(config, function(err) {
    // ... error checks 
    if(!err){
    // Query 
        var request = new sql.Request(connection);

        /* Below, I used the fullquery variable, which we can use to pass in queries through the view */
        request.query(scmQueryArray.config, function(err, recordset) {
            if(!err){  //only runs on no errors
                //console.dir(recordset);
               mongoString.scm.full=recordset;
            }
        });
        request.query(fullquery1, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.qry1=recordset;
            }
        });
        request.query(fullquery2, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.qry2=recordset;
            }
        });
        request.query(fullquery3, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.qry3=recordset;
            }
        });
        request.query(fullquerymsm, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.msm=recordset;
            }
        });
        request.query(fullqueryservicePC, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.servicePC=recordset;
            }
        });
        request.query(fullTableList, function(err, recordset) {
            if(!err){  //only runs on no errors
               //console.dir(recordset);
               mongoString.tableList=recordset;
            }
        });
    } else {
        console.dir("There was an error: " + err);
    }

});

// Add a basic route – api link to AppInsight JSON
app.get('/api_scm.json', function (req, res) {
        res.json(mongoString.scm);
    })
    .get('/api_tdt.json', function (req, res) {
        res.json(mongoString.tdt);
    })
    .get('/api_entp.json', function (req, res) {
        res.json(mongoString.entp);
    })
    .get('/api_msm.json', function (req, res) {
        res.json(mongoString.msm);
    })
    .get('/api_servicePC.json', function (req, res) {
        res.json(mongoString.servicePC);
    })
    .get('/api_tableList.json', function (req, res) {
        res.json(mongoString.tableList);
    })
    .get('/full.json', function (req, res) {
        res.json(mongoString.scm.full);
    });

//Add a basic route - default index.html
app.get('/', function (req, res) {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.send('index.html');
});

var portNo = 3005;
app.listen(portNo);  // Bind to a port
console.timeEnd('Application total boot time was');
console.log('app listening on port: ' + portNo);
