var React = require("react");

var UserBar = React.createClass({
    
    render: function () {
    
        var UserBarStyle = {
            padding: 10,
            background: "#FF0000",
        };
        
        return (
            <div style= {UserBarStyle}>
                <h1>Josh Bar</h1>
                <h4>Here is some text yo</h4>
            </div>
        );
        
    }
});

module.exports = UserBar;