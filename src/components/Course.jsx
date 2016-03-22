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
        
        var modules = this.props.modulesData[0].Lesson;
        
        return (
            <div style= {CourseStyle} className="col-sm-8">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Course</h6>
                <ModuleNavigator modules={modules} initialModule={0}/>
            </div>
        );
    }
});
module.exports = Course;