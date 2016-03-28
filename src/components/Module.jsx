var React = require("react");
var ConceptNavigator = require("./ConceptNavigator.jsx");
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
                <h4>Module Title - {this.props.title}</h4>
                <p>Promise - {this.props.subtitle}</p>
                {/*May not need Promise component. This Promise info is in the ModuleNavigator componenet.
                <Promise />*/}
                
                <ConceptNavigator concepts={this.props.conceptsData} initialConcept={0}/> {/*initialConcept won't always be 0; user may want to pick up where they left off*/}
                <Challenge />
            </div>
        );
    }
});

module.exports = Module;
