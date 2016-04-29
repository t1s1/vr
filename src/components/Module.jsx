var React = require("react");
var ConceptNavigator = require("./ConceptNavigator.jsx");
var Challenge = require("./Challenge.jsx");
var Promise = require("./Promise.jsx");

var Module = React.createClass({
    
    getInitialState: function () {
        return {visible: false};
    },
    
    
    onClick: function () {
        this.setState({visible: !this.state.visible});
    },
    
     componentDidMount: function() {
      $(".enterHere").click( function() {
          $( ".moduleChoice" ).css( "display", "none" );
          $( ".conceptWrapper" ).css( "display", "block" );
      });
  },
  
  
  
 
    
    render: function () {
        
        
      
        
        var moduleStyle = {
            color: "white",
            border: "none",
            background: "none"
            
        };
        
         var pictureSwitcher = {
            position: "relative",
            zIndex: 1,
            display: "block",
            width: "100%",
            margin: "35px auto 0 auto"
            
            
            
        };
        
        var pictureWrapper = {
            
            position:"relative",
            display:"block"
        };
       
       
       var overlayText = {
           position: "absolute",
           zIndex: 5,
           top: "50%",
           left:"50%",
           transform: "translate(-50%, -50%)",
           textAlign:"center"
           
       };
        
        var ghostButton = {
            background: "none",
            padding: "12px 22px",
            border: "2px solid #fff",
            color: "#fff",
            margin: "0px auto 0px auto",
            borderRadius: "0",
            fontFamily: "Century Gothic, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",  
        };
    
     
      
        
        
        return (
            <div className="row">
                <div style={moduleStyle} className="col-sm-12" >
                   
                    <div style={pictureWrapper} className="moduleChoice">
                     <img style={pictureSwitcher} src={this.props.data.Topic[0].ParaBlock[0].Figure[0].MediaObject[0].Renditions[0].Web[0].$.uri} />
                     <div style={overlayText}>
                        <h3 className="responsiveTitle" style = {{color:"#fff", fontFamily:"Century Gothic, sans-serif", textAlign:"center", fontSize:"70px"}}><b>Agile Method</b> {/*- {this.props.title}*/}</h3>
                        {/*<p style = {{color:"#fff", fontFamily:"Century Gothic, sans-serif", textAlign:"center"}}>Video Editing {this.props.data.Topic[0].ParaBlock[0].RichText}</p> */}
                        <p style = {{color:"#fff", fontFamily:"Century Gothic, sans-serif", textAlign:"center"}}> {this.props.subtitle}</p>
                        <button style={ghostButton} className="enterHere hoverBtn">Get Started</button>
                       
                        
                    </div>
                    </div>{/*pictureWrapper*/}
                    {/*May not need Promise component. This Promise info is in the ModuleNavigator componenet.
                    <Promise />*/}
                    <div className="conceptWrapper" style={{display:"none"}}>
                        <ConceptNavigator concepts={this.props.data.Topic} initialConcept={0}/> {/*initialConcept won't always be 0; user may want to pick up where they left off*/}
                        <Challenge data={this.props.data} />
                    </div>
                </div>
            </div>
       
            
         
        );
    }

});

module.exports = Module;
