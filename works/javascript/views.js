var pageFunctionality = function() {
	                $(".dropdown-menu li h6").on("click", function(){
                    	//alert( $(this).data("ref") );
                        var sqlCriteria = ($(this).data("qry"));
                    	console.log("Query type: " + sqlCriteria );
                    	var jqueryPullServer = "function that will return serverName from clicked item";
                    	var jqueryPullDb = "function that will return dbName from clicked item";
                    	$(".page-header").next().html("" +
                    		"<h1>Page Body: " + sqlCriteria + " query results for </h1>" +
                    		"<div><p> From the ServicePC: " + jqueryPullServer + "</p>" +
                    		"<p> From the database: " + jqueryPullDb + "</p>");
                    	//$(".form-control").val((sqlCriteria).subStr(0,12));

                   //send sqlCriteria as the request string, FROM
                	})
	};