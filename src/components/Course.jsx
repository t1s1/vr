var React = require("react");
var CBM = require("./CBM.jsx");

var Course = React.createClass({
    
    render: function () {
        
        var CourseStyle = {
            marginTop: 10,
            padding: 10,
            background: "#DDD"
        };
        
        return (
            <div style= {CourseStyle} className="col-sm-8">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Course</h6>
                <CBM />
            </div>
        );
    }
});

module.exports = Course;