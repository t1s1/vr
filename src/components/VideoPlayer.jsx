//NOT CURRENTLY USED
//NOT CURRENTLY USED
//NOT CURRENTLY USED

var React = require("react");

var VideoPlayer = React.createClass({
    
    render: function () {
        
        var playerStyle = {
            padding: 10,
            background: "white",
            border: "#5555BB",
           
        };

        return (
            <div style= {playerStyle} className="col-sm-12 noPad">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Video Player</h6>
                {/*we aren't using this iframe*/}
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/qDVtih6Bw-U" frameborder="0" allowfullscreen></iframe>
            </div>
        );
    }
});



module.exports = VideoPlayer;


