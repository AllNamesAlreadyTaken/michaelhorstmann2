var buttons = function(){


// I need these to first generate unique PCNames, then the unique PC Names are to be drop-downs
// Step 2 is pop the LI's by PCName to each drop down... probs much smaller text so we can see em all

    var scmBtns = function(){
        $.ajax({
                url: "/api_scm.json", 
                success: function(result){
                    //console.log(result);
                    var buttonresult = "";
                    $(result).each(function(){
                       var buttonText = "<small>" + this.PCName + "</small></br>" + "<li>" + this.name + "</li>";  // Creates SQLString for NODE:req.obj
                       buttonresult += ("<li><h6 data-qry='scm'>"  + buttonText + "</h6></li></hr>");
                       //console.log(this.PCName);
                    })
                    $(".dropdown-menu:eq(0)").html(buttonresult);
                }
            })
    };

    var tdtBtns = function(){
        $.ajax({
                url: "/api_tdt.json", 
                success: function(result){
                    //console.log(result);
                    var buttonresult="";
                    $(result).each(function(){
                        var buttonText = "<small>" + this.PCName + "</small></br>" + "<li>" + this.name + "</li>";  // Creates SQLString for NODE:req.obj
                        buttonresult += ("<li><h6 data-qry='tdt'>"+ buttonText + "</h6></li></hr>");
                        //console.log(this.PCName);
                    })
                    $(".dropdown-menu:eq(1)").html(buttonresult);
                }
            }) 
    };

    var entpBtns = function(){
        $.ajax({
                url: "/api_entp.json", 
                success: function(result){
                    //console.log(result);
                    var buttonresult = "<ul>";
                    $(result).each(function(){

                        var buttonText = "<small>" + this.PCName + "</small></br>" + "<li>" + this.name + "</li>";  // Creates SQLString for NODE:req.obj
                        buttonresult += ("<li><h6 data-qry='entp'>"  + buttonText + "</h6></li></hr>");   
                        //console.log(this.PCName);
                    })
                    $(".dropdown-menu:eq(2)").html(buttonresult);
                }
            })                
    };

    var msmBtns = function(){
        $.ajax({
                url: "/api_msm.json", 
                success: function(result){
                    //console.log(result);
                    var buttonresult = "";
                    $(result).each(function(){
                        var buttonText = "<small>" + this.PCName + "</small></br>" + "<li>" + this.dbName + "</li>";  // Creates SQLString for NODE:req.obj
                        buttonresult += ("<li><h6 data-qry='msm'>"  + buttonText + "</h6></li></hr>");      
                        //console.log(dataref);
                    })
                    $(".dropdown-menu:eq(3)").html(buttonresult);
                }
            })
    };

    var srvpcBtns = function(){
        $.ajax({
                url: "/api_servicePC.json", 
                success: function(result){
                    //console.log(result);
                    var buttonresult = "";
                    $(result).each(function(){
                        var buttonText = "<small>" + this.PCName + "</small> <span class='glyphicon glyphicon-menu-right'></span>";  // Creates SQLString for NODE:req.obj
                        buttonresult += ("<li><h6 data-qry='srvPC'>"  + buttonText + "</h6></li></hr>");    
                        //console.log(this.PCName);
                    })
                    $(".dropdown-menu:eq(4)").html(buttonresult);
                }
            })        
        .done(function(){
            pageFunctionality();
            pageForm();
            $('.dropdown').on('show.bs.dropdown', function(e){
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();   
            }).on('hide.bs.dropdown', function(e){
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });
        });
    };

(function(){
    scmBtns(); //loads SCM buttons
    tdtBtns(); //loads tdt buttons
    entpBtns(); //loads entp buttons
    msmBtns(); //loads msm buttons
    srvpcBtns() //loads srvPC buttons
})();
};