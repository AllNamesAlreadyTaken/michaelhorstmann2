if(jQuery){
    console.log("jQuery already enabled, no need to inject it.");
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
        $ = jQuery.noConflict();  //enables jQuery in noConflict mode in the even the
                                  //dollar sign was a preprocessor for another language.
//jQuery should now be enabled and function as if the page had loaded it using 
//$(document).ready(function(){ 
//Your extended jQuery code now applies dynamically as if it was within here// })
// CHEERS! -MCH 01/28/2015 ;)
};