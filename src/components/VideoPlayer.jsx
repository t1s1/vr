var React = require("react");

var VideoPlayer = React.createClass({
    
    render: function () {
        
        var playerStyle = {
            padding: 10,
            background: "white",
            border: "#5555BB"
        };

        return (
            <div style= {playerStyle} className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Video Player</h6>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/qDVtih6Bw-U" frameborder="0" allowfullscreen></iframe>
            </div>
        );
    }
});

module.exports = VideoPlayer;