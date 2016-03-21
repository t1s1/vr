var React = require("react");
var MainMenuBar = require("./MainMenuBar.jsx");
var Course = require("./Course.jsx");
var Shell = React.createClass({
    
      

    render: function () {

       
        var CourseStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #888",
            background: "#EFEFEF"
        };
        
        return (
            <div style= {CourseStyle} className="row col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Shell</h6>
                <h6>This came from main: {this.props.data.CoverPage[0].Title}</h6>
                <Course data={this.props.data} />
                <MainMenuBar />
            </div>
        );
    

    }
});

module.exports = Shell;