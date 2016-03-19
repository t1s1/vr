var React = require("react");
var ReactDom = require("react-dom");
var Shell = require("./components/Shell.jsx");
var jsonstring;

$.getJSON('https://vision-rocket.herokuapp.com/modules/The_Business_Analyst_in_an_Agile_Environment', function(data) {
  jsonstring = JSON.stringify(data);
  //arr = $.map(data, function(el) { return el; });
  //console.log(jsonstring);
}).then(function(){
    ReactDom.render(<Shell dump={jsonstring}/>, document.getElementById("main"))});
    

/* Uncaught Invariant Violation: Objects are not valid as a React child (found: object with keys {IA}). 
If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. 
Check the render method of `Shell`.

http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call

*/