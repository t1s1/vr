var React = require("react");
var Concept = React.createClass({
    
    render: function () {
        var conceptStyle = {
            padding: 10,
            background: "gray",
            border: "#5555BB"
          };
        
       
        var object = this.props.data;
        //Array for components that pass 
        var componentpack =[];
        
        
         //Checking for ParaBlock vs QuestionBlock
        var contentobject;
        var practiceobject;
      
        if (object.hasOwnProperty("ParaBlock")) {
        contentobject = object.ParaBlock[0];
        
        //TEXT
        var text;
        if(contentobject.hasOwnProperty("RichText")) {
            text = contentobject.RichText;
            componentpack.push(<Text text={text} />);
        }
        
        //IMAGE
        var image;
        if(contentobject.hasOwnProperty("Figure")) {
            image = contentobject.Figure[0].MediaObject[0].Renditions[0].Web[0].$.uri;
            //This if statement filters out photos that are tagged as "Module Selector Photo" - they appear in module selector, not on concept page
            if (contentobject.Figure[0].MediaObject[0].Renditions[0].Web[0].$.ProductionNote !== "Module Selector Photo") {
            componentpack.push(<Image image={image} />);
            }
        }
        
        //VIDEO
        var video;
        if(contentobject.hasOwnProperty("Movie")) { 
            video = contentobject.Movie[0].LaunchMovie[0]; 
            componentpack.push(<Video video={video}  />);
        }
              }
        //PRACTICE
        var practice;
        if (object.hasOwnProperty("QuestionBlock")) {
        practiceobject = object.QuestionBlock[0];
        practice = practiceobject.MatchingActivity[0];
            componentpack.push(<Practice practice={practice}  />);
        }
        
        
       
        return (
        <div style= {conceptStyle} className="col-sm-12">
            {componentpack}
        </div>
        );
    }
});

var Image = React.createClass({
     render: function () {
 
     return (
     <img src={this.props.image}/>
      );
     }
   });


var Video = React.createClass({
      render: function () {
        var playerStyle = {
            padding: 10,
            background: "red",
            border: "#5555BB"
        };

        return (
            <div style= {playerStyle} className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Video Player</h6>
                <iframe width="420" height="315" src={this.props.video} frameborder="0" allowfullscreen></iframe>
            </div>
        );
    }
});

var Text = React.createClass({
     render: function () {
    return (
     <p>{this.props.text}</p>
              )}
});

//This component only works with 1-to-1 Matching Activities. It's a "hot mess". Distractors are randomized.  
var Practice = React.createClass({
     render: function () {
var clicked;
var matchers=($( ".matcher" ));
var match=($(".match"));

matchers.click(function() {

if ($(this).attr("data-clicked") !== "done") {

$.each(matchers, function() {
 if ($(this).attr("data-clicked") !== "done") {
 $(this).attr("data-clicked", "no");
 }
  });

$(this).attr("data-clicked", "yes");
clicked = $(this);

}

});

match.click(function() {
if ($(this).attr("data-clicked") !== "done") {

$.each(match, function(index, val) {
  if ($(this).attr("data-clicked") !== "done") {
    $(this).attr("data-clicked", "no");
  }
});

$(this).attr("data-clicked","yes");
if (clicked.attr("data-num") == $(this).attr("data-num")) {
  alert("Correct!");
  $(this).attr("data-clicked", "done");
  clicked.attr("data-clicked", "done");
      }
else {
    alert("WRONG!");
}  
}
});
         var practice = this.props.practice;
         var choices = practice.Option;
         var distractorarray = [];
         var matcharray = [];
         var randomarray = [];
        
         var Shuffle = function (o) {
     	 for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	     return o;
        };
         
       $.each(choices, function(index, value) {
          if (value.Distractor) {
              distractorarray.push(this.Distractor[0].RichText);
          }
          if (value.Match) {
              matcharray.push(this.Match[0].RichText);
          }
       } );
        distractorarray.map(function(dist, index) {
        randomarray.push(<div data-num={index} data-clicked="no" className="card matcher">{dist}</div>);
        });
        Shuffle(randomarray);
	    
        return (
        <div>
        <p>{practice.QuestionStem[0].RichText}</p>
        <div>
        {
       randomarray.map(function(dist) {
        return dist;
        })
        }
        </div>
        <div>
               {
               matcharray.map(function(mat, index) {
               return <div data-num={index} data-clicked="no" className="card match">{mat}</div>;
        })
                   
               }
        </div>
      
        </div>);
     }});
         



module.exports = Concept;

