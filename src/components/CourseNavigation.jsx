var React = require("react");
var NavItem = require("./NavItem.jsx");
var Slideshow = require("./slideshow/Slideshow.jsx");

var CourseNavigation = React.createClass({
    
    render: function() {
        
        var modules = [
            {
                id         : "slide1",
                imagePath  : "http://mikedempsey.typepad.com/.a/6a00e5532538c48833017ee7131ffa970d-320wi",
                imageAlt   : "Slide 1 Image",
                title      : "Slide 1",
                subtitle   : "Slide 1 Image SubTitle",
                text       : "Slide 1 Image Text",
            },
            {
                id         : "slide2",
                imagePath  : "https://s-media-cache-ak0.pinimg.com/736x/bd/cd/8b/bdcd8bda537f8d0f8aaf5c93880d5642.jpg",
                imageAlt   : "Slide 2 Image",
                title      : "Slide 2",
                subtitle   : "Slide 2 Image SubTitle",
                text       : "Slide 2 Image Text"
            },
            {
                id         : "slide3",
                imagePath  : "http://www.piccianeri.com/wp-content/uploads/2015/05/God-Save-The-Queen.jpg?c3f98e",
                imageAlt   : "Slide 3 Image",
                title      : "Slide 3",
                subtitle   : "Slide 3 Image SubTitle",
                text       : "Slide 3 Image Text"
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
                <Slideshow modules={modules} initialModule={2}/>
            </div>
        );
    }
});

module.exports = CourseNavigation;