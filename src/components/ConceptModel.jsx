var React = require("react");
var ConceptPage = require("./ConceptPage.jsx");

var ConceptModel = React.createClass({
    
    render: function () {
    
        var conceptModelStyle = {
            padding: 10,
            background: "#234567"
        };
        
        return (
            <div style={conceptModelStyle} className={this.props.show ? "col-sm-12 hidden" : "col-sm-12"}>
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Concept Model</h6>
                <ConceptPage />
            </div>
        );
        
    }
});

module.exports = ConceptModel;