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
            "Intro",
            "1",
            "2",
            "3",
            "4"
        ];
        
        return (
            <div style= {CourseStyle} className="col-sm-8">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>json.IA.CoverPage[0].Title</h6>
                <CourseNavigation modules={modules} />
                <Module />
            </div>
        );
    }
});

module.exports = Course;