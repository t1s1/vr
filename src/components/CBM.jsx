var React = require("react");
var ConceptModel = require("./ConceptModel.jsx");
var Challenge = require("./Challenge.jsx");
var Promise = require("./Promise.jsx");

var CBM = React.createClass({
    
    getInitialState: function () {
        return {visible: false};
    },
    
    onClick: function () {
        console.log(this.state.visible);
        this.setState({visible: !this.state.visible});
    },
    
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
                <button style={{color:"#DD3300"}} onClick={this.onClick}>Show/hide</button>
                <Promise />
                <ConceptModel show={this.state.visible} />
                <Challenge show={this.state.visible} />

            </div>
        );
    }
});

module.exports = CBM;