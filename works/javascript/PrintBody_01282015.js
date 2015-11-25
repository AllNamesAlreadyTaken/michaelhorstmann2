
if(jQuery){
    console.log("jQuery enabled, beginning table build...");
    //myTableFunction();
} else {
    (function(){
//HOW TO ENABLE JQUERY IN THE VIEW USING CONSOLE COMMANDS BELOW
jq = document.createElement('script'); 
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"; 
})();

document.getElementsByTagName('head')[0].appendChild(jq); 
// ... give time for script to load, then type: 
jQuery.noConflict();
//If the console response is:  "function (a,b){return new m.fn.init(a,b)}" jQuery has been enabled
//Set the jQuery commands to dollar sign by typing the following:
$ = jQuery.noConflict();
//jQuery should now be enabled and function as if the page had loaded it using 
//$(document).ready(function(){ //Your extended jQuery code now applies dynamically as if it was here// })
// CHEERS! -MCH 01/28/2015 ;)
};

//Below is the TableBody function

(function(){
        
        finalStringPiece = ""; 
        var rowHTML =""; 
        var lineHTML=""; 
        var spanHTML=""; 
        var evalPartial=""; 
        var tableData=""; 
        var tblRowCounter=0;
        var cachedRows = $("#CustomData").find("tr").siblings(); //td by row
        var $iterationsCount= cachedRows.length;
        //console.log($(cachedRows).text());

        $(cachedRows).each(function(){
            //returns 26 sibling elements (should only loop 26 times - true)
            tblRowCounter++;
            var elementsLength = $(this).find("td").length;
            //sets the data element length to 14(true)
            
            console.log("Running row " + tblRowCounter + " : " + $(this).text() +"\n"
                + "There are: " + elementsLength + " data elements in this row\n"
                + "Total iterations to be performed: " + $iterationsCount + "\n"
                + "Remaining iterations: " + (($iterationsCount+1) - tblRowCounter) + "\n");
            lineHTML="";
            $(this).find("td").each(function(){
                //okay to here

                console.log("Table data element text: " + $(this).text() );
                //the entire piece of text for each element of data in a row.
                evalPartial = $(this).text();
                //if(evalPartial = "USD"){
                spanHTML= "<td>" + $(this).text() + "</td>";
                //} else {
                //    spanHTML+= "<td>" + $(this).text() + "</td>";
                //};
                lineHTML += spanHTML;
                //console.log(lineHTML);
            });
            rowHTML += "<tr>" + lineHTML + "</tr>";
            //console.log(rowHTML);
        });
        //okay to here
        
        finalStringPiece += "<tbody>" + rowHTML + "</tbody>"; //Comment in prod
        console.log(" Final Table Body Build: \n" + finalStringPiece);
        console.log("Success! " + $iterationsCount + " Table rows completed." + "\n");
    })();
};