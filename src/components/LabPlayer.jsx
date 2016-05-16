//NOT BEING USED AT THE MOMENT
//testing this out to see if it will work in codepen first but I believe I might need evan to put the link in the LCMS

var React = require("react");


var LabPlayer = React.createClass({
  
     render: function () {
        
        

         return (
           <div className="responsive-iframe-lab">
                <iframe className="myLab" src={this.props.lab} src="https://labs2.remotelabs.com/?resId=4277-Stage01-Pod777" frameborder="0" align="middle" width="100%" height="684px" allowtransparency="true" scrolling="no" allowFullScreen="true" webkitallowFullScreen="true" mozallowFullScreen="true"></iframe>
           </div>
        );
    }
  
})

module.exports = LabPlayer;