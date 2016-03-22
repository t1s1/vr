var React = require("react");
var ReactDom = require("react-dom");
var Shell = require("./components/Shell.jsx");
var json_dump;

$.getJSON('https://vision-rocket.herokuapp.com/modules/The_Business_Analyst_in_an_Agile_Environment_NOGUIDS', function(data) {
json_dump = data;
}).then(function(){
    ReactDom.render(<Shell data={json_dump.IA}/>, document.getElementById("main"))});
    

