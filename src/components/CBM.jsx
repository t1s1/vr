var React = require("react");
var ConceptModel = require("./ConceptModel.jsx");
var Challenge = require("./Challenge.jsx");
var Promise = require("./Promise.jsx");

var CBM = React.createClass({
    
    render: function () {
        
        var CBMStyle = {
            color: "white",
            padding: 10,
            border: "1px solid #000044",
            background: "#999"
        };
        
        return (
            <div style= {CBMStyle} className="panel panel-default col-sm-12" >
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>CBM</h6>
                <Promise />
                <ConceptModel />
                <Challenge />
            </div>
        );
    }
});

module.exports = CBM;