/* On the fly updates to http://barkleyrei.com/ - by MCH 0827/2015 */
/* Begin by changing jQuery to the dollar sign pre-processor variable to use as you normally would below.  */

//set the site's hosted jQeury to the dollar sign variable for this demonstration
var $ = jQuery;
$(document).ready(function(){
$(".work-item").find("ul li").hide();

$(".work-item-services").css({"background" : "rgb(156,40,29)", "font-weight": "bold"})
$(".work-item").on("mouseenter", function(){
     var element = $(this).find("ul li");
     $(element).css("font","1em stronger black")
     $(element).show(1000);
});
$(".work-item").on("mouseleave", function(){
     $(this).find("ul li").hide(500);
});

$("div.services.col-group.services").on("mouseenter", "div", function(){
    $(this).find("span").css("color","red");
    $(this).first().css({"border":"1px solid black","margin":"-1px"});
});

$("div.services.col-group.services").on("mouseleave", "div", function(){
      $(this).find("span").css("color","white");
      $(this).first().css({"border":"none","margin":"0px"});
});


//testing hierarchy prior to enabling jQuery to the dollar sign

jQuery(".services.col-group.services").children().each(function(){
    console.log( $(this).text() );
});

/* Drop in the animate.css file from the href for address below to add some additional pre-built cool animations to the "about/service" div group from a href'd css file due to time limitations.
@ (https://raw.githubusercontent.com/daneden/animate.css/master/animate.css)  We'll be using this href.
*/

/* Avoce will set up the script to pass into the existing page as animateCssLink to include into root doc */
//console.log(animateCssLink); //for testing your link

/* Vanilla JS to pop in "animate.css" */

var animateCssLink = "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css";

var animCSS= window.document.createElement("link")
  animCSS.setAttribute("rel", "stylesheet")
  animCSS.setAttribute("type", "text/css")
  animCSS.setAttribute("href", "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css")

//One last check!
  console.log("pop in script element html below: ")
  console.log( animCSS );
//Pass in with jQeury
   $("head").last().append(animCSS);  
   $("#menu").find("nav.ul.li").on("click", function(){
     $(this).toggleClass("animated flip infinite");
     //Loading script dynamically doesn't allow me to throw the script's necessities in
     //But it could previously loaded script. I'd normally debug this further by checking
     //the animate.css style sheet against a new project with animat installed to the 
     //project via bower and nothing else loaded on it so nothing conflicts
   });
});