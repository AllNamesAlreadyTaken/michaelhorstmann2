var pageFunctionality = function() {
	                $(".dropdown-menu li h6").on("click", function(){
                    	//console.log( $(this).data("qry") );
                        var sqlCriteria = ( $(this).data("qry"));
                    	console.log("Query type: " + sqlCriteria );
                    	var jqueryPullServer = $(this).find("small").text();
                    	var jqueryfindDb = $(this).find("li").text();
                    	var jqueryPullDb = '';
                        if(!jqueryfindDb){
                            jqueryPullDb = ";";
                            } else {
                            jqueryPullDb = " AND dbName ='" + jqueryfindDb + "';"
                        }
                        $(".page-header > h3").text("Dashboard - " + sqlCriteria);
                        var update = "" +
                            "<div class= 'jumbotron'><h1>Page Body: " + sqlCriteria + " query results for </h1>" +
                            "<div><p> From the Server or ServicePC: " + jqueryPullServer + "</p>" +
                            "<p> From the database: " + jqueryPullDb + "</p>" +
                            "<p> SELECT * FROM " + sqlCriteria + "View WHERE pcName = '" + jqueryPullServer 
                            + "'" + jqueryPullDb + '<p></div>';
                        $(".page-header").next().html(update);                              
                   //send sqlCriteria as the request string, FROM the view
                    })
                    $(".navbar-brand").on("click", function(){
                        $(".page-header > h3").text("Dashboard - Home");
                        $(".page-header").next().html("<div class='jumbotron'><h1>Admin View: </h1><p>Admin options below</p><p>option1</p><p>option2</p><p>etc...</p><div>");
                    })
	};