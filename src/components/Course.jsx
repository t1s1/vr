var React = require("react");
var CourseNavigation = require("./CourseNavigation.jsx");
var Module = require("./Module.jsx");

var Course = React.createClass({
    
    render: function () {
        
        var CourseStyle = {
            marginTop: 10,
            padding: 10,
            background: "#DDD"
        };
        
        var modules = [
            {
                id         : "Intro",
                imagePath  : "http://mikedempsey.typepad.com/.a/6a00e5532538c48833017ee7131ffa970d-320wi",
                imageAlt   : "Intro Image",
                title      : "Intro",
                subtitle   : "Intro SubTitle",
                text       : "Intro Text",
            },
            {
                id         : "Module 1",
                imagePath  : "https://s-media-cache-ak0.pinimg.com/736x/bd/cd/8b/bdcd8bda537f8d0f8aaf5c93880d5642.jpg",
                imageAlt   : "Module 1 Image",
                title      : "Module 1",
                subtitle   : "Module 1 SubTitle",
                text       : "Module 1 Text"
            },
            {
                id         : "Module 2",
                imagePath  : "http://www.piccianeri.com/wp-content/uploads/2015/05/God-Save-The-Queen.jpg?c3f98e",
                imageAlt   : "Module 2 Image",
                title      : "Module 2",
                subtitle   : "Module 2 SubTitle",
                text       : "Module 2 Text"
            }
        ];
        
        return (
            <div style= {CourseStyle} className="col-sm-8">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Course</h6>
                <CourseNavigation modules={modules}  initialModule={2}/>
                <Module />
            </div>
        );
    }
});

module.exports = Course;