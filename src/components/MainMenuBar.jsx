var React = require("react");

var MainMenuBar = React.createClass({
    
    render:  function () {
        
        var menuBarStyle = {
            padding: 10,
            background: "#654321"
        };
        
        return (
            <div className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Menu Bar</h6>
                <ol>
                    <li>My Courses</li>
                    <li>Profile</li>
                    <li>Help</li>
                    <li>Sign Out</li>
                </ol>
            </div>
        );
    }
});

module.exports = MainMenuBar;