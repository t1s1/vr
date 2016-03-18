var React = require("react");
var ReactDom = require("react-dom");
var Shell = require("./components/Shell.jsx");
var jsondump;

$.getJSON('https://vision-rocket.herokuapp.com/modules/The_Business_Analyst_in_an_Agile_Environment', function(json) {
    jsondump = json;
}).then(function(data){
   console.log("working "+ data);
   ReactDom.render(<Shell derp={data.IA.CoverPage[0].Title}/>, document.getElementById("main"))});
    

/*Uncaught Invariant Violation: Objects are not valid as a React child (found: object with keys {IA}). 
If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. 
Check the render method of `Shell`.

http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call

*/