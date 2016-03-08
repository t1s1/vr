var React = require("react");
var VideoPlayer = require("./VideoPlayer.jsx");

var ConceptPage = React.createClass({
    
    render: function () {
        
        var promiseStyle = {
            padding: 10,
            background: "#345678"
        };
        
        return (
            <div style= {promiseStyle} className="text-left col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Concept Page</h6>
                <VideoPlayer />
            </div>
        );
    }
});

module.exports = ConceptPage;