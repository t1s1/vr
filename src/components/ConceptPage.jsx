var React = require("react");
var Concept = require("./Concept.jsx");
var ConceptPage = React.createClass({
    
    render: function () {
        
        var promiseStyle = {
            padding: 10,
            background: "purple"
        };
        
        return (
            <div style= {promiseStyle} className="text-left col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Concept Page</h6>
                <h3>{this.props.title}</h3>
                <Concept data={this.props.data} title={this.props.data.Title}/>
                
                {/* <VideoPlayer /> */}
            </div>
        );
    }
});

module.exports = ConceptPage;