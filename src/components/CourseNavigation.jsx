var React = require("react");
var NavItem = require("./NavItem.jsx");

var CourseNavigation = React.createClass({
    
    render: function() {
        
        var CourseNavStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#6789AB"
        };
        
        var createNavItem = function(text, index) {
            return (<NavItem key={index} text={text} />);  
        };
        
        return (
            <div style= {CourseNavStyle}>
                <h6 style={{color:"#DD3300"}}>Course Navigation</h6>
                <ul className="list-inline">{this.props.modules.map(createNavItem)}</ul>
            </div>
        );
    }
});

module.exports = CourseNavigation;