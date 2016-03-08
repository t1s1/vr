var React = require("react");

var Challenge = React.createClass({
    
    render: function () {
        
        var challengeStyle = {
            padding: 10,
            background: "#123456"
        };
        
        return (
            <div style= {challengeStyle} className="text-left col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Challenge</h6>
                <ol>
                    <li>Download the files.</li>
                    <li>Try the challenge. If you get stuck, click the Learn button to review the concepts.</li>
                    <li>Send us your work for expert review.</li>
                </ol>
            </div>
        );
    }
});

module.exports = Challenge;