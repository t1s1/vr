var React = require("react");
var MainMenuBar = require("./MainMenuBar.jsx");
var Course = require("./Course.jsx");
var Shell = React.createClass({
    

    render: function () {
            return (
            <div className="col-sm-12">
                <Course courseData={this.props.data.CoverPage[0]} modulesData={this.props.data.Lessons[0].Lesson} />
                <MainMenuBar /> {/*the data for this component does not come from the course content json*/}
            </div>
        );
    }
});

module.exports = Shell;