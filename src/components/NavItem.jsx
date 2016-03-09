var React = require("react");

var NavItem = React.createClass({
    
    render: function () {
        
        return (
            <li><button className="btn btn-default btn-sm">{this.props.text}</button></li>
        )
    }
});

module.exports = NavItem;