var React = require("react");

var Promise = React.createClass({
    
    render: function () {
        
        var promiseStyle = {
            padding: 10,
            background: "#345678"
           
        };
        
        return (
            <div style= {promiseStyle} className="text-right col-lg-12 noPad">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Promise</h6>
                In this challenge, you will write and prioritize user stories, and update a backlog in response to change.
            </div>
        );
    }
});

module.exports = Promise;

