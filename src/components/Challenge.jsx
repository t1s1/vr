var React = require("react");

var Challenge = React.createClass({

    render: function () {
        
        var challengeStyle = {
            padding: 10,
            background: "#123456"
        };
     
        var componentpack = [];
        if (this.props.data.hasOwnProperty("ContentGroup")) {
              // console.log(this.props.data.ContentGroup[0].Topic[0].Topic[0].ParaBlock[0].List[0].ItemBlock[0].Item[0].ItemPara);
            componentpack.push(<ChallengeIntro data={this.props.data.ContentGroup[0].Topic[0]} />);
            componentpack.push(<ChallengeInstructions data={this.props.data.ContentGroup[0].Topic[0]} />);
        }
        
        
        return (
            <div style= {challengeStyle} className={this.props.show ? "col-sm-12 hidden" : "col-sm-12"}>
               
                <h6 style={{color:"#DD3300"}}>Challenge</h6>
                {componentpack}
                </div>
        );
    }
});

var ChallengeIntro = React.createClass({
    
    render: function() {
        return(
            <div>
                <h3>{this.props.data.Title}</h3>
                <iframe width="420" height="315" src={this.props.data.ParaBlock[0].Movie[0].LaunchMovie[0]} frameborder="0" allowfullscreen></iframe>
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
module.exports = Challenge;

/*  console.log(this.props.data.Topic[0].ParaBlock[0].List[0].ItemBlock[0].Item[2].ItemPara[0]);
        var i = i++;
        var steps = this.props.data.Topic[0].ParaBlock[0].List[0].ItemBlock[0].Item;
        var stepsarr = [];
        steps.map(function(step) {
        stepsarr.push(step.ItemPara[0]);
        });*/