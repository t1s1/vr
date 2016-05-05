var React = require("react");

var Challenge = React.createClass({
    
    render: function () {
        
        var componentpack = [];
        if (this.props.data.hasOwnProperty("ContentGroup")) {
            componentpack.push(<ChallengeTitle title={this.props.data.ContentGroup[0].$.name} />);
            componentpack.push(<Scenario data={this.props.data.ContentGroup[0].Topic[0]} />);
            componentpack.push(<Setup data={this.props.data.ContentGroup[0].Topic[1]} />);
            componentpack.push(<Activities data={this.props.data.ContentGroup[0].Procedure[0]} />);
        }
      
      
        return (
              <div>
                    {componentpack}
             </div>
           
        );
    }
});

var ChallengeTitle = React.createClass({
    
    render: function() {
        return(
            <div style={{background:"#0BA6E0",height:"150px", marginTop:"-20px",marginBottom:"30px"}} className="row text-left">
            <h2 style={{color:"#fff",fontFamily:"Century-Gothic, sans-serif",marginTop:"60px",marginLeft:"15px", fontWeight:"bold"}}>{this.props.title}</h2>
            </div>
            );
    }
});

var Scenario = React.createClass({
    
    render: function() {
        return(
            <div>
                <h4 style={{fontWeight:"bold"}}>{this.props.data.Title[0]}</h4>
                <p>{this.props.data.ParaBlock[0].RichText[0]}</p>
                <hr />
            </div>               
            
            );
    }
});

var Setup = React.createClass({
     render: function() {
        var steps = this.props.data.TitledBlock[0].ParaBlock[0].List[0].ItemBlock[0].Item;
        return(
            <div>
            <h4 style={{color:"#333",fontWeight:"bold"}}>{this.props.data.Title[0]}</h4>
            <h5 style={{color:"#0BA6E0",fontWeight:"bold"}}>{this.props.data.TitledBlock[0].Title[0]}</h5>
            <ul>
              {steps.map(function(step) {
               return <li style={{color:"#0BA6E0"}}>{step.ItemPara[0]}</li>;
              })}
            </ul>
            <hr />
            </div>
        );
    }
});

var Activities = React.createClass({
    

    
  render: function() {
    var activityArr = this.props.data.StepGroup[0].Step;
       //console.log(this.props.data);
    
    return (
     <div>
      <h4 style={{fontWeight:"bold"}}>{this.props.data.Title[0]}</h4>
      <ol>
       {activityArr.map(function(act, index) {
               return <li style={{color:"#0BA6E0"}}>{act.UserAction[0].ActionDescription[0]}
                   
                    {/*<Requirements data={this.props.data.StepGroup[0].Step[index]} />*/}
                   
               </li>;
              })}
      </ol>
     </div>
     
    );
    
    
  }
  
});

var Requirements = React.createClass({
     render: function() {
        var reqArr = this.props.data.UserAction[0].List[0].ItemBlock[0].Item;
        return(
            <ul>
             {reqArr.map(function(req) {
               return <li>{req.ItemPara[0]}</li>;
              })}
             </ul>
        );
    }
});

module.exports = Challenge;
