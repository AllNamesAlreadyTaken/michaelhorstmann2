//Final build

if(window.jQuery){
    console.log("jQuery already enabled, you may begin...");
    //myTableFunction();
} else {
    (function(){
        //HOW TO ENABLE JQUERY IN THE VIEW USING CONSOLE COMMANDS BELOW
        jq = document.createElement('script'); 
        //jq.src can be any CDN link to jQuery it does not require 1:1 google api's link below
        jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(jq);  
        })();
        // ... give time for script to load, then type: 
        jQuery.noConflict();
        //If the console response is:  "function (a,b){return new m.fn.init(a,b)}" jQuery has been enabled
        //Set the jQuery commands to dollar sign by typing the following:
        $ = jQuery.noConflict();
        //jQuery should now be enabled and function as if the page had loaded it using 
        $(document).ready(function(){ 
            //Your extended jQuery code now applies dynamically as if it was here// 
        });
    // CHEERS! -MCH 01/28/2015
};

//BEGIN Print Function

var PrintFunction = function(){
//Full Print function
var headers="";
var tblRowCounter=0;
var rowHTML="";  

//BEGIN Table Head
var headersFunction = function(){
        //If TESTING UNCOMMENT BELOW AND RUN AS COMMAND
            //var headers="";
        
        //Define length of headers for the report by "col" count
        var colCnt = $("col").length;
        var $CustomDataVals = $("#CustomData > thead > tr > th > a");
        
        //Create condition to valuate a good table
        if(colCnt!=$CustomDataVals.length){
            console.log("Sorry, this report cannot be printed! Due to column matching error.");
        } else {
            //Begin process if table lengths match
            console.log("There are " + colCnt + " header columns for this report."+"\n"+"Building columns now...");
            
            //iterate table head values and write to a variable "headers"
            $($CustomDataVals).each(function(){
                headerVal = "<th>" + $(this).text() +"</th>";
                //Uncommenting below will show the process of building the table
                headers += headerVal;
                console.log(headers);
            });
        //Surround the built table data with a table row and head
        console.log("\nThe table Header has complete.")
        //you can add custom styling to the table head row as shown below
        //headersFull = '<thead><tr class="whatever-head">' + headers + "</tr></thead>"; 
        headersFull = '<thead><tr>' + headers + "</tr></thead>";            
        //Below shows that the headers variable is being populated correctly
        //console.log(headersFull);
        };
};
//END Table Head
headersFunction();
//EXECUTE Table Head


//BEGIN Table Body
var bodyFunction = function(){
        var cachedRows = $("#CustomData").find("tr").siblings(); //td by row
        var $iterationsCount= cachedRows.length;
        $(cachedRows).each(function(){
            tblRowCounter++;
            var elements = $(this).find("td");
            var elementsLength = elements.length;
            //sets the data element length to 14(true)
            console.log("Running row " + tblRowCounter + " : " + $(this).text() +"\n"
                + "There are: " + elementsLength + " data elements in this row\n"
                + "Total iterations to be performed: " + $iterationsCount + "\n"
                + "Remaining iterations: " + (($iterationsCount+1) - tblRowCounter) + "\n");
            console.log("Running row " + tblRowCounter + "There are "+ (($iterationsCount+1) - tblRowCounter) + " remaining.\n");
            lineHTML="";
            $(elements).each(function(){
                //okay to here
                var textHere = $(this).text();
                console.log("Table data element text: " + textHere);
                spanHTML= "<td>" + textHere + "</td>";
                lineHTML += spanHTML;
                console.log(lineHTML);
            });
            //you can add custom styling by row content, as shown below
            //rowHTML += '<tr class="whatever-body">' + lineHTML + "</tr>";
            rowHTML += '<tr>' + lineHTML + "</tr>";
            console.log(rowHTML);
        });
        //finalStringPiece += rowHTML + "</tbody>"; //Comment in prod
        console.log("Success! " + $iterationsCount + " Table rows completed." + "\n");
    };
//END Table Body
bodyFunction();
//EXECUTE Table Body

//Set the finalStringPiece variable to open the table with a class if desired
finalStringPiece = '<table class="table table-condensed" style="@media print{page-break-inside:avoid;}">' + headersFull + rowHTML + "</table>";
    //alert or log the final table to the client window
    console.log("Final Table Body Build: \n" + finalStringPiece);
    //sets finalStringPiece = finalStringPiece1(makes finalStringPiece1 global to the window)
    finalStringPiece1 = finalStringPiece;
    style1="<html>\n<head>\n" +
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">\n' +
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">\n' +
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>\n' +
    '<style>@media print{ tr, td {page-break-inside: avoid;}}</style></head><body>\n' + finalStringPiece + '</body>\n</html>';
//END Full Print Function -- exec = PrintFunction();
    (function(){
        document.open("text/html");
        document.writeln(style1);
        window.print();
    })();
};

//END Print Function






/*
//iterates row data for style conditions -- in this case "0"
$("tr").each(function(){
   $(this).find("td").each(function(){
     if(($(this).text()) == "0"){
        console.log("winner winner chicken dinner!" + $(this).text() + "\n");
        $(this).find("tr > td").css("color","blue");
     };
   });
});
*/

/*
//toggles all back to black
////var $clear = function(){ $("tr > td").css("color","black"); }; $clear;
*/