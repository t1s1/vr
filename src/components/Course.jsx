var React = require("react");
var ModuleNavigator = require("./ModuleNavigator.jsx");
var Module = require("./Module.jsx");

var Course = React.createClass({
    
    componentDidMount: function() {
      $(".enterHere").click( function() {
          $( ".accentBkg" ).css( "display", "block" );
         
      });
  },
    
    render: function () {
      
        var CourseStyle = {
            marginTop: 10,
            paddingTop: 20,
            background: "none",
            margin: "0 auto"
            
            
            
        };
        
        var titleStyle = {
            color: "#444445",
            fontFamily:"Century Gothic,sans-serif",
            textAlign:"center",
            display:"none"
            
        };
        
        var descripStyle = {
            color: "#444445",
            opacity: 0.87,
            filter: "alpha(opacity=87)",
            progid: "DXImageTransform.Microsoft.Alpha(opacity=87)",
            fontFamily: "Century Gothic, sans-serif",
            fontSize: 14,
            letterSpacing: 0.14,
            width:"40%",
            textAlign:"center",
            margin:"0 auto",
            display:"none"
        };
        
        return (
                    
                
                   
                        <div style= {CourseStyle} className="col-sm-12 noPad">
                            {/* to be replaced with dynamic content */}
                            <h2 style= {titleStyle} >Multimedia Production 101 Master Course</h2>
                            <p style= {descripStyle} >Want to be the best Multimedia Specialist? Would you like to share your skills with the world, showing
        off your abilites in everything media? Learn the basics of animating, audio engineering, web design (including)
        ui/ux and many other trade skills.</p>
                        
                            <ModuleNavigator modules={this.props.modulesData} initialModule={0}/>
                            <div className="accentBkg" style={{display:"none"}}></div>
                        </div>
                        
                   
                
           
        );
    }
});
module.exports = Course;