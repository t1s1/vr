var React = require("react");
var ModuleNavigator = require("./ModuleNavigator.jsx");
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
                title      : "Intro",
                subtitle   : "Intro SubTitle",
                text       : "Intro Text",
            },
            {
                id         : "Module 1",
                title      : "Module 1",
                subtitle   : "Module 1 SubTitle",
                text       : "Module 1 Text"
            },
            {
                id         : "Module 2",
                title      : "Module 2",
                subtitle   : "Module 2 SubTitle",
                text       : "Module 2 Text"
            }
        ];
        
        return (
            <div style= {CourseStyle} className="col-sm-8">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Course</h6>
                <ModuleNavigator modules={modules}  initialModule={0}/>
            </div>
        );
    }
});
module.exports = Course;