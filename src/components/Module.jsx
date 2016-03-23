var React = require("react");
var ConceptModel = require("./ConceptModel.jsx");
var Challenge = require("./Challenge.jsx");
var Promise = require("./Promise.jsx");

var Module = React.createClass({
    
    getInitialState: function () {
        return {visible: false};
    },
    
    onClick: function () {
        this.setState({visible: !this.state.visible});
    },
    
    render: function () {
        
        var moduleStyle = {
            color: "white",
            padding: 10,
            border: "1px solid #000044",
            background: "#999"
        };
        
        return (
            <div style={moduleStyle} className="panel panel-default col-sm-12" >
                {/* to be replaced with dynamic content */}
                <h4>{this.props.title}</h4>
                <p>{this.props.subtitle}</p>
                <Promise />
                <ConceptModel />
                <Challenge />
            </div>
        );
    }
});

module.exports = Module;
