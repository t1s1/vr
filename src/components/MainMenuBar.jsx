var React = require("react");

var MainMenuBar = React.createClass({
    
    render:  function () {
        
        
        var headContainer = {
            borderTop: "10px solid #1D3D71",
            height: "120px",
            paddingTop: "35px"
            
        };
        
        var ulStyles = {
            
            listStyleType: "none",
            marginTop: "20px"
            
        };
        
        var liStyles = {
            display: "inline"
            
        };
        
        var profileNamePos = {
            padding: "5px 5px 0 0"
            
        };
        
      
        
        return (
            <div style = {headContainer}>
                <div className="col-lg-12 noPad">
                {/* to be replaced with dynamic content */}
                    <div className="row">
                       <div className="col-lg-9">
                	        <a href="#"><img className="pull-left" src="media/gk_logo.png" width="127" height="57" alt="Global Knowledge Logo" /></a>
                       </div>{/*logo wrapper*/}
                       <div className="col-lg-3">
                        <ul style = {ulStyles}>
                            <li style = {liStyles}>
                                <a href="#"><img className="pull-right" src="media/profilePic.png" width="27" height="27" alt="profile picture" /></a>
                               
                            </li>{/*profile list*/}
                            <li style = {liStyles}>
                                 <a href="#"><span style = {profileNamePos} className="pull-right">Josh</span></a>
                            </li>
                        </ul>
                       </div>
                    </div>
                </div>
                   
            </div>
            
        );
    }
});

module.exports = MainMenuBar;