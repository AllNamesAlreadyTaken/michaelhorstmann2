$(document).ready(function(){
    console.log("jQuery instantiated!");
    $('.lead').hide(); //Hides job definitions
    alert("Welcome to my site! Don't forget to check out some of the javascript fun I'm having in the .js files!");
    //Displays job definitions on hover, prompts user to click to make them stay visible
    $('.extend').on("mouseenter", function(){
        toShow= "<p class='col col-md-8' style='display:hidden;'><small>" + $(this).closest('.col-md-4').find('.lead').text() + "</small></p>";
        $('#jobDef').hide();
        $('#jobDefFade').html(toShow);
        $('.extend').text("More...");
        $(this).text("More...   Click here to view.")
        $('#jobDefFade').fadeTo("fast", .75);
    })
    .on("click", function(){
        viewingTitle = $(this).closest("div").find("h1>a").text();
        console.log(viewingTitle);
        $('.extend').text("More...");
        $(this).text("Now viewing:  " + viewingTitle);
        $('#jobDefFade').hide();
        $('#jobDef').html("<p class='lead bkgCol'>" + $(this).closest('.col-md-4').find('.lead').text() + "</p>");
        $("#jobDef").show();
    });
});