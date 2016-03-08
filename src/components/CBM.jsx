var React = require("react");
var ConceptModel = require("./ConceptModel.jsx");
var Challenge = require("./Challenge.jsx");
var Promise = require("./Promise.jsx");

var CBM = React.createClass({
    
    render: function () {
        
        var CBMStyle = {
            color: "white",
            marginTop: 10,
            padding: 10,
            borderColor: "#DDD",
            background: "#666"
        };
        
        return (
            <div style= {CBMStyle} className="row panel panel-default col-sm-8">
                <h2>CBM</h2>
                <Promise />
                <ConceptModel />
                <Challenge />
            </div>
        );
    }
});

module.exports = CBM;