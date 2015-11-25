console.log("buttonclick.js loaded");
var pageForm = function(){	
		$("form > div > input").on("keyup", function(){
			var SearchString = this.value;
			var response = {};
			console.log(SearchString);
			if((SearchString.length)>0){
				var searchVal = SearchString;  //increment SearchString on keyup
				var searchSize = SearchString.length; //keep track of SearchString length
				console.log("searchVal: " + searchVal +" searchStringLength: " + searchSize );
				$.ajax({
					url: "api_tableList.json",
					success: function(result){
					j=0;
					for(i=0;i<result.length;i++){
						var objectPiece	= {
							p_Id: result[j].p_Id,
							pcName: result[j].pcName,
							dbName: result[j].dbName,
							tblName: result[j].tblName,
							obj_id: result[j].obj_id,
							db_type: result[j].db_type,
							create_date: result[j].create_date,
							modify_date: result[j].modify_date,
							max_column_id_used: result[j].max_column_id_used
							}
						if((result[j].pcName) === "ServicePC1"){
							console.log(objectPiece.dbName + " " + objectPiece.tblName);
						    };
						j++;
					};
					}
				});
			}
		});
};