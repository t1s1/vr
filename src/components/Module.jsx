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
                <h3>Module Title - {this.props.title}</h3>
                <p>Invitation - {this.props.data.Topic[0].ParaBlock[0].RichText}</p> 
                <p>Promise - {this.props.subtitle}</p>
                <img src={this.props.data.Topic[0].ParaBlock[0].Figure[0].MediaObject[0].Renditions[0].Web[0].$.uri} />
                {/*May not need Promise component. This Promise info is in the ModuleNavigator componenet.
                <Promise />*/}
                
                <ConceptNavigator concepts={this.props.data.Topic} initialConcept={0}/> {/*initialConcept won't always be 0; user may want to pick up where they left off*/}
                <Challenge data={this.props.data} />
            </div>
        );
    }
});

module.exports = Module;
