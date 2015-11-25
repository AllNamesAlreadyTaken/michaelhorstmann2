<html>
    <body>
    <div class="container">
        <div class="header">
            <ul class="nav">
                <li class="active"><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contact</li>
            </ul>
            <h3 class="text-muted">CSS Inspections</h3>
        </div>

        <div class="row">
            <div class="col-xs-3">
                <div class="panel panel-default">
                    <div class="panel-heading"></div>
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <div class="panel panel-default">
                    <div class="panel-heading-primary"></div>
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <div class="panel panel-default">
                    <div class="panel-heading-primary"></div>
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <div class="panel panel-default">
                    <div class="panel-heading-primary"></div>
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>

<script>
    /*
    //Create a button to prepend a table on generation that will be used for printing function execution.
        $("button").click(function(){
            $("tr.text-center").each(function(){
                message = $(this).text();
                console.log(message);
            });
        });
    //END BUTTON snippet
    */

//BEGIN TABLE FUNCTION
/*
function mytablefunction(){
    //Set global variables
    //tableHeader variables
        var headerVal=""; 
        var headers = ""; 
        var headersFull ="";

    //tableBody variables
        var lineHTML="";
        var evalPartial="";
        var tableData="";
        var tblCounter = 0;
        var rowHTML="";

    //finalStich variables
        var finalStringPiece = "";
*/
    //Begin table Header Function
/*
        var headersFunction = function(){

            //If TESTING UNCOMMENT BELOW AND RUN AS COMMAND
                //var headerVal ="";
                //var headers="";
                //var headersFull="";
            
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
                    headerVal = "<td>" + $(this).text() +"</td>";
                    //Uncommenting below will show the process of building the table
                    console.log(headers);
                    headers += headerVal;
                });
            //Surround the built table data with a table row and head
            console.log("The table Header has completed, see below:")
            headersFull = '<thead><tr class="whatever">' + headers + "</tr></thead>";            
            //Below shows that the headers variable is being populated correctly
            console.log(headersFull);
            };
        };
    //End table Header Function  (TableHeaders Now defined as "headersFull")
        */
        //Comment out starred area comment below to test
        /*
        (function(){
            tableDataFunction()
            finalStringPiece = '<table class="table table-responsive">' + headersFull + '</table>';
            console.log(finalStringPiece);
        });                
*/
        //Comment out starred area comment below to test - END

/*
    //Begin tableBody Function
        var tableDataFunction = function(){

            //If TESTING UNCOMMENT BELOW AND RUN AS COMMAND
                var rowHTML, lineHTML, evalPartial, tableData="";
                var tblCounter=0;
            //cache the table rows
                var cachedRows = $("#rdDataTableDiv-CustomData").find("tr").siblings();
                //console.log(cachedRows);

                rowHTML = "<tbody>"; 
            $(cachedRows).each(function(){
                //testing logger below, uncomment to test
                tblCounter ++;

                //log row being added
                console.log("running row " + tblCounter );
                //log the line to be added
                console.log($(this).text());

                //for each line, grab the text by span
                $(this).find("span").each(function(){
                    //td values by row
                    console.log($(this).text());
                })
                //Set Local Variables
                var $iterationCount = cachedRows.length;
                var $cachedText = "";
                
                $(this).find("td").each(function(){
                    $cachedText = $(this).find("span").text();
                });
                console.log("iterations to be performed: " + $iterationCount);
                //while($iterationCount!=tblCounter)
                console.log("cached text res: " +$cachedText);                
                evalPartial = $cachedText;
                
                console.log(evalPartial);
                if (evalPartial == "USD"){
                    
                };
            });

        };
*/
/*
//BEGIN CONSTRUCTOR SECTION
        //uncomment below for testing variables
        //var finalStringPiece = "";

        var constructFinal = function(){
            //Stitch pieces together
                //set table header then add tableBody to it
                finalStringPiece = "HTML FILE PASSED"; //headers + tableData;
                console.log(finalStringPiece);
            //Below opens a new page with the built string
            var launcherWindow = function(){
                //alert user going to new window
                alert("Opening a new window to display print view.");
                //Create the window, and set window options
                var myPrintWindow = window.open("", "MsgWindow", "width=full, height=full");
                //Send the constructed print view to the window for printing, and print it
                (function(){
                    //Below the new window is launched, and the string piece constructed 
                    //prior written into the new window. Then the print function is called
                    myPrintWindow.document.write(finalStringPiece);
                    myPrintWindow.print();
                })();
            };
            //Launches new window that gets fed the composed "finalStringPiece" variable (HTML)
            launcherWindow();

        };

//END FINAL CONSTRUCTOR PIECE
*/
</script>