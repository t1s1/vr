var React = require("react");
var ReactDom = require("react-dom");
var Shell = require("./components/Shell.jsx");
var jsondump;

$.getJSON('https://vision-rocket.herokuapp.com/modules/The_Business_Analyst_in_an_Agile_Environment_NOGUIDS', function(data) {
jsondump = data;
}).then(function(){
    ReactDom.render(<Shell data={jsondump.IA}/>, document.getElementById("main"))});
    

/* Uncaught Invariant Violation: Objects are not valid as a React child (found: object with keys {IA}). 
If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. 
Check the render method of `Shell`.
*/
