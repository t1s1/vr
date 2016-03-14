var React = require("react");
var NavItem = require("./NavItem.jsx");
var Slideshow = require("./slideshow/Slideshow.jsx");

var CourseNavigation = React.createClass({
    
    render: function() {
        
        var modules = [
            {
                id         : "slide1",
                imagePath  : "http://placekitten.com/g/400/300",
                imageAlt   : "Slide 1 Image",
                title      : "Slide 1",
                subtitle   : "Slide 1 Image SubTitle",
                text       : "Slide 1 Image Text",
                action     : "Slide 1 Image Action",
                actionHref : "href"
            }
        ];
        
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
                {/*<ul className="list-inline">{this.props.modules.map(createNavItem)}</ul>*/}
                <Slideshow data = {this.modules} />
            </div>
        );
    }
});

module.exports = CourseNavigation;