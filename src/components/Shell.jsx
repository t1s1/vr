var React = require("react");
var MainMenuBar = require("./MainMenuBar.jsx");
var Course = require("./Course.jsx");
var Shell = React.createClass({
    
       /* componentDidMount: function() {
        $.getJSON('https://vision-rocket.herokuapp.com/modules/The_Business_Analyst_in_an_Agile_Environment', function(data) {
        console.log(data);
        console.log(data.IA.CoverPage[0].Title)
            }
            )
                    }*/

    render: function () {
        console.log(this.props.dump);
        var arr = JSON.parse(this.props.dump);
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
                <h6>This came from json: {arr.IA.CoverPage[0].Title}</h6>
                <Course />
                <MainMenuBar />
            </div>
        );
    

    }
});

module.exports = Shell;