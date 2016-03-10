var React = require("react");

var Invitation = React.createClass({
    
    render: function () {
        
        var invitationStyle = {
            padding: 10,
            background: "#456789"
        };
        
        return (
            <div style= {invitationStyle} className="text-left col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"purple"}}>Invitation</h6>
                A backlog is an essential part of making sure your agile team is doing the right work at the right time. Think of it as a single source for what needs to be accomplished in order to satisfy the business. It contains all identified user stories and they are estimated, organized, and prioritized. If you’re an agile BA, you’ll need to know what goes into creating a backlog and what you need to do to make sure that it is serving the team and your business well.
            </div> 
        );
    }
});

module.exports = Invitation;