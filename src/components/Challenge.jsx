var React = require("react");

var Challenge = React.createClass({
    
     componentDidMount: function() {
      $(".challengeBtn").click( function() {
          alert('hey there');
          $( "#challengePack" ).show();
          
      });
  }, 
  

    render: function () {
        
        var challengeStyle = {
           
           display: "none",
           marginLeft:"10px",
            marginTop:"-16px",
            marginBottom:"100px",
            color:"#000"
           
        };
        
        var challengeBarStyle ={
            background: "#0FC6F7",
            height:"85px"
              
        };
     
        var componentpack = [];
        if (this.props.data.hasOwnProperty("ContentGroup")) {
            componentpack.push(<ChallengeIntro data={this.props.data.ContentGroup[0].Topic[0]} />);
            componentpack.push(<ChallengeInstructions data={this.props.data.ContentGroup[0].Topic[0]} />);
            
        }
        
        var challengeBarComponent = [];
        if (this.props.data.hasOwnProperty("ContentGroup")) {
             challengeBarComponent.push(<ChallengeBar />);
        }
        
        
        return (
          <div className="container">
                <div className="row">
                    {/*<div style={challengeBarStyle} className="challengeText">
                    {challengeBarComponent} 
                    </div>
                
                    <div id="challengePack" style= {challengeStyle}>
                    {componentpack}
                    </div>*/}
                </div>
            </div>
        );
    }
});



var ChallengeIntro = React.createClass({
    
    render: function() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    
                        <h3>{this.props.data.Title}</h3>
                        
                            <iframe className="embed-responsive-item" width="100%" height="500" src={this.props.data.ParaBlock[0].Movie[0].LaunchMovie[0]} frameborder="0" allowfullscreen></iframe>
                        
                    </div>
                </div>
            </div>
            );
        
    }
});

var ChallengeInstructions = React.createClass({
    
   
   
    render: function() {
        var steps = this.props.data.Topic[0].ParaBlock[0].List[0].ItemBlock[0].Item;
        return(
            <ol>
              {steps.map(function(step) {
               return <li>{step.ItemPara[0]}</li>;
              })}
            </ol>
        );
    }
});

var ChallengeBar = React.createClass({
    
   
    
  render: function() {
    
    
    return (
        <div style={{color:"#fff", width:"100%"}}>
            <p style={{color:"#fff",fontSize:"14px",fontFamily:"Century Gothic, sans-serif", letterSpacing:"0.2px", position:"relative", top:"8px"}}>Dont be afraid, just challenge yourself now.</p>
            <button className="challengeBtn" style={{color:"#fff", textDecoration:"none", fontFamily:"Century Gothic, sans-serif", fontSize:"14px", border:"1px solid #fff", padding:"10px", position:"relative", top:"14px", cursor:"pointer"}}>Challenge</button>
        </div>
     
    );
    
  }
  
});

module.exports = Challenge;
