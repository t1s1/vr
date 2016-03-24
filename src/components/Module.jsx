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
        console.log(this.props.data);
        var moduleStyle = {
            color: "white",
            padding: 10,
            border: "1px solid #000044",
            background: "#999"
        };
        
        return (
            <div style={moduleStyle} className="panel panel-default col-sm-12" >
                {/* to be replaced with dynamic content */}
<<<<<<< HEAD
                <h6 style={{color:"#DD3300"}}>Module</h6>
                <h6>{this.props.Title}</h6>
                <button style={{color:"#DD3300"}} onClick={this.onClick}>Show/hide</button>
                <div show={this.state.visible} >
                    <Promise data={this.props.data} />
                    <ConceptModel />
                    <Challenge />
                </div>
=======
                <h4>{this.props.title}</h4>
                <p>{this.props.subtitle}</p>
                <Promise />
                <ConceptModel />
                <Challenge />
>>>>>>> c0755cf0d0e95ad20c3b41315c9a5fa175747029
            </div>
        );
    }
});

module.exports = Module;
