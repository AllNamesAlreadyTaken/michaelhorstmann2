var x=[];
for (var i in window){
    x.push(i)
};
var variables = x.join("\n");
alert(variables);

/*
  //Iterate currently instantiated variables
  //for current window and alert them to the view.
  // Created by : MCH-10-06-2015
*/