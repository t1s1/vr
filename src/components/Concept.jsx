var React = require("react");
var Concept = React.createClass({
    
    render: function () {
        var conceptStyle = {
            padding: 0,
            background: "#fff",
            border: "none",
            width:"100%"
            
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
        <div class ="row">
            <div style= {conceptStyle} className="col-md-12 noPad">
               
                {componentpack}
            </div>
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
            border: "none",
            width:"100%",
            display:"block",
            position:"relative",
            
            
        };
        
        var challengeTextPrimer = {
            fontFamily: "Century Gothic, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.2px",
            color:"#fff", 
            opacity: "0.69", 
            filter: "alpha(opacity=69)",
            progid:"DXImageTransform.Microsoft.Alpha(opacity=69)",
            paddingLeft:"20px",
            paddingTop:"20px"
          
            
        };
        
       

        return (
            <div className="container noPad">
                <div className="row">
                    <div style={playerStyle} className="col-lg-12">
                        {/* to be replaced with dynamic content */}
                        {/*<h6 style={{color:"#fff"}}>Video Player</h6>*/}
                
                      
                        <iframe className="embed-responsive-item" width="100%" height="500" src={this.props.video} frameborder="0" allowfullscreen></iframe>
                      
                          
                        </div>
                    </div>
            </div>
            
        );
    }
});

var Text = React.createClass({
     render: function () {
    return (
    <div className="container noPad">
        <div className="row">
            <div className="col-md-12">
              <span style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"10px", background:"#0FC6F7", display:"block", color:"#fff", fontFamily:"Century Gothic, sans-serif"}}>{this.props.text}</span>
                
            </div>
        </div>
    </div>
              )}
});

//This component only works with Matching Activities. It's a "hot mess". Distractors are randomized.  
var Practice = React.createClass({
     render: function () {
var clicked;
var matchers=($( ".matcher" ));
var match=($(".match"));

matchers.click(function(event) {
$.each(matchers, function(index, val) {
  if ($(this).attr("data-clicked") !== "done") {
    $(this).attr("data-clicked", "no");
  }
});
$(this).attr("data-clicked", "yes");
clicked = $(this);

});

match.click(function(event) {
$.each(match, function(index, val) {
  if ($(this).attr("data-clicked") !== "done") {
    $(this).attr("data-clicked", "no");
  }
});
$(this).attr("data-clicked","yes");
if (clicked.attr("data-num") == $(this).attr("data-num")) {
  $( ".feedback" ).replaceWith( "<p>This is feedback for the CORRECT answer</p>" );
  $(this).attr("data-clicked", "done");
  clicked.attr("data-clicked", "done");
      }
else {
    $( ".feedback" ).replaceWith( "<p>This is feedback for the WRONG answer</p>" );
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
        }
         
       $.each(choices, function(index, value) {
          if (value.Distractor) {
              distractorarray.push(this.Distractor[0].RichText);
          }
          if (value.Match) {
              matcharray.push(this.Match[0].RichText);
          }
       } );
        distractorarray.map(function(dist) {
        randomarray.push(<div data-num={dist.id} data-clicked="no" className="card matcher">{dist}</div>);
        });
        Shuffle(randomarray);
	    
        return (
        <div className="col-sm-12">
        <p>{practice.QuestionStem[0].RichText}</p>
        <div>
        {
       randomarray.map(function(dist) {
        console.log(dist);
        return dist;
        })
        }
        </div>
        <div>
               {
               matcharray.map(function(mat) {
               return <div data-num={mat.id} data-clicked="no" className="card match">{mat}</div>;
        })
                   
               }
        </div>
        <div className="feedback"></div>
        </div>);
     }});
         



module.exports = Concept;

