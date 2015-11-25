<script id= "real function">

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

    //Perform evaluation on the process occurring or not
    //Validator Piece
    //This function will automatically test the table header build
    //Running Table Build validator

    /*
        (function(){
             var $table = $("#rdDataTableDiv-CustomData > #CustomData");
             var headerCount = $($table).find("tr > th").length;
             var dataCount = $($table).find("tr").length;

        if( ($($table).find("col").length) === ($($table).find("tr > th").length) )
            {
                console.log("success! " + "\n" + headerCount + " Table Header Columns found beginning header column build..." + "\n");
            } else {
                return "error:prebuild not qualified.";
            }
        })();
    */

//BEGIN TABLE HEADER FUNCTION
    	var headersFunction = function(){
        
        //STRING TO CREATE:
        //<table><thead><tr>BUILDS TABLE DATA</tr></thead>
        // sets thead info
        //  gets td by x data > return text
        //   adds all td's to thead piece
        //    appends thead string into the finalstringpiece
        //does not close table, after aggregation of head and body will be closed in final string piece

        //If testing uncomment below
        //finalStringPiece += "<tbody>";   //comment out in prod
            //If testing uncomment below and run as a command
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
            //Update user
            console.log("Success! " + headerCount + " Table Header Columns completed as the first row." + "\n");
        };

    //END TABLE HEADER FUNCTION
        	//EXECUTE TABLE HEADERS FUNCTION
        	headersFunction();  //comment out in prod
        		//UPDATE USER
        		  //console.log("Success! " + headerCount + " Table Header Columns completed as the first row." + "\n");

            //move on to tableBody function


    //BEGIN TABLE BODY FUNCTION
        var tableDataFunction = function(){

        //STRING TO CREATE:
        //<tbody><tr>BUILDS TABLE BODY DATA</tr></tbody></table>
        // sets tbody info
        //  gets tr by x rows > able to define class if necessary
        //   adds a new tr
        //    adds all td's by x data > return text then ends row
        //append tbody into finalstringpiece
        //does not open or close table, after aggregation of head and body will be closed in final string piece

        //If testing uncomment below
        finalStringPiece = "";   //comment out in prod
            //If testing uncomment below and run as command
            	var rowHTML ="";
            	var lineHTML="";
            	var spanHTML="";
            	var evalPartial="";
            	var tableData="";
            	var tblCounter=0;
            //cache the table rows less pagination
            var cachedRows = $("#CustomData").find("tr").siblings();
                //log the rows count
                	console.log($(cachedRows).text();
            //set rowHTML to table row
            finalStringPiece += "<tbody>";
            rowHTML = "<tr>";
            $(cachedRows).each(function(){
                //testing logger below, uncomment to test
                tblCounter ++;

                //log row being added
                console.log("running row :" + tblCounter + " Data is: " + $(this).text());
                //log the line to be added
                rowHTML="";
                rowHTML += $(this).text();
                console.log(rowHTML + "= rowHTML");

                //for each line, grab the text by span
                $(this).find("span").each(function(){
                    //td > span text by row
                    spanHTML = $(this).text();
                });
                console.log(spanHTML + " ");
                //Set Local Variables
                var $iterationCount = cachedRows.length;
                var $cachedText = "";
                
                $(this).find("td").each(function(){
                    $cachedText = $(this).find("span").text();
                });


                console.log("iterations to be performed: " + $iterationCount);
                //while(($iterationCount!=tblCounter) && ($iterationCount<=tblCounter)){
                console.log("cached text res: "+$cachedText);                
                evalPartial=$cachedText;
                console.log(evalPartial);
                if (evalPartial == "USD"){
                    //insert end of row
                };
            });
            //UPDATE USER
            console.log("Success! " + tblCounter + " Table rows completed." + "\n")
        };
    //END TABLE BODY FUNCTION
    		//EXECUTE TABLE BODY FUNCTION
    		tableDataFunction();  //comment out in prod
    			//UPDATE USER
    			//console.log("Success! " + tblCounter + " Table rows completed." + "\n");
            //move on to constructor function

    //BEGIN FINAL CONSTRUCTOR FUNCTION
    	var constructFinal = function(){
     		console.log("Sending the following to the print Screen: \n");
     		console.log(finalStringPiece);
	        	//uncomment below for testing variables
	        	//var finalStringPiece = "";
	        (function(){
	            //Stitch pieces together
	                //set table header then add tableBody to it
	                finalStringPiece = "HTML FILE VALUE TO BE PASSED"; //headers + tableData;//
	            //Below opens a new page with the built string
	            var launcherWindow = function(){
	                //alert user going to new window
	                alert("Opening a new window to display print view.  Close this window to navigate back to the original after printing.");
	                //Send the constructed print view to the window for printing, and print it
	                (function(){
	                	//Create the window, and set window options	                
	                	var myPrintWindow = window.open("", "MsgWindow", "width=full, height=full");
	                    //Below the new window is launched with finalStringPieced passed to it
	                    myPrintWindow.document.write(finalStringPiece);
	                    //Call the print function on the new document window
	                    myPrintWindow.print();
	                })(); //self execute within launcherWindow
	            //Launches new window that gets fed the composed "finalStringPiece" variable (HTML)
	            launcherWindow();
            });
        };
    //END FINAL CONSTRUCTOR FUNCTION
        	//EXECUTE FINAL CONSTRUCTOR FUNCTION
        	constructFinal();  //comment in prod
    			//UPDATE USER
    			console.log("Final Page constructed sending report to the print view...");
        //Move on to final self executing stitch function

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


 (function(){
         var $table = $("#rdDataTableDiv-CustomData > #CustomData");
         var headerCount = $($table).find("tr > th").length;
         var dataCount = $($table).find("tr").length;

        if( ($($table).find("col").length) === ($($table).find("tr > th").length) )
            {
                console.log("success! " + "\n" + headerCount + " Table Header Columns found beginning header column build..." + "\n");
                //insert tableHeader function
                        
                            //RUN TABLE HEADERS PIECE
                            headersFunction();
                console.log("success! " + headerCount + " Table Header Columns complete." + "\n");
                //insert tableBody function

                            //RUN TABLE BODY PIECE
                            tableDataFunction();
                console.log(dataCount + " Table Rows Found, beginning table data build...");
                
                $($table).find("tr").each(function(){
                    $(this).find("td").each(function(){
                        //console.log($(this).text());
                    });
                });
                console.log("success! " + dataCount + " Table Rows complete.");
                console.log("Constructing Final object...");
                    //EXECUTE CONTSRUCTOR PIECE
                    constructFinal();
                console.log("Off to the printers!");

            } else
            {
                console.log("error on: tblCounts");
            };
        })();

};


//END function mytablefunction TOP LEVEL


//</script>



/*
<script id="testing">

var printingFunction =function(){
    var myOldWindow = document.body.innerHTML;
    var headerPiece = document.getElementById("head");
    var bodyPiece = $("#CustomData > tbody").html();
    var closingPiece = document.getElementById("footer");
    var displayPiece = (headerPiece + bodyPiece + closingPiece);
    var myNewWindow = window.open("", "_blank");
    myNewWindow.document.write(displayPiece);
    //window.print();
    //myNewWindow.document.write(myOldWindow);
};

var printingFunction2 = function(){
    var stringBody ="";
    var myOldWindow = document.documentElement.innerHTML;

    $("td").find(".text-center").children().each(function(){
        if((this).text){
            stringBody += ($(this).closest("span").text());
        };
    });
    var DisplayPiece = stringBody;
    var myNewWindow = window.open("", "_blank");
    window.print();
    myNewWindow.document.write(myOldWindow);
};

*/


/* 
//EDI EVALUATOR

var stringHTML = "";

$("#rdDataTableDiv-CustomData").find("tr").children().each(function() {
        var $cachedText = $(this).find("span").text();
        if(($cachedText.length) == 9){
            console.log($cachedText.charCodeAt(0));
            if($cachedText.charCodeAt(0) == "$"){
                console.log($cachedText + " " + "This is a monetary value");
                } else {
                stringHTML += " " + $cachedText;
                };
        } else {
            console.log($cachedText + " " + "is not an EDI number");
        };
    });

console.log(stringHTML);

//END EDI EVALUATOR
*/ 


/*
//MONETARY VALUE EVALUATOR

var StringReport = "";
$("#rdDataTableDiv-CustomData").find("tr").children().each(function() {
    var $cachedText = $(this).find("span").text();
    var $iterationCount = $cachedText.prev().prev().length;    
    if ($($cachedText).slice(-3,-2) == "."){
        StringReport += " " + $cachedText + " ";
    } else {
        console.log("This is not monetary " + $cachedText);
    };
});
console.log(StringReport);

//END MONETARY VALUE EVALUATOR
*/

/*
//GENERIC GRAB ALL

$("#rdDataTableDiv-CustomData").find("tr").children().each(function() {
    var $iterationCount = $(this).find("span").parent().html();
    console.log($iterationCount);
    var $cachedText = $(this).find("span").text();
    console.log($cachedText);
});
//END GENERIC GRAB ALL
*/

/*
//CATCH ALL <td> ELEMENTS

$("#rdDataTableDiv-CustomData").find("tr").children().each(function(){console.log("<td>" + $(this).text() + "</td>")});

//END CATCH ALL <td> ELEMENTS
/*

/*
//WORKING WITH AJAX RESPONSE

	var responsePiece = "";
	$.ajax({
	  url:"rdPage.aspx?rdReport=GL_PVH_F2R_RetailSumm_Print&rdRequestForwarding=Form','_blank','false','',true",
	  context: document.body
	}).done(function(){
	responsePiece = ($(this).html());
	});
	console.log(responsePiece);
	(function(){
	                    var myPrintWindow = window.open("", "MsgWindow", "width=full, height=full");
	                    //Below the new window is launched, and the string piece constructed 
	                    //prior written into the new window. Then the print function is called
	                    myPrintWindow.document.write(responsePiece);
	                    myPrintWindow.print();
	})();

//END WORKING WITH AJAX
*/
    //Perform evaluation on the process occurring or not
    //Validator Piece
    //This function will automatically test the table header build
    //Running Table Build validator
   

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
//END function mytablefunction TOP LEVEL