/*global $*/
var React = require("react");
var Concept = React.createClass({
    
    render: function () {
        var conceptStyle = {
            width: "100%",
            paddingLeft: "20px",
            paddingBottom: "100px",
            //maxHeight: "375px",
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
            componentpack.push(<Image image={image}/>);
            }
        }
        
        //VIDEO
        var video;
        if(contentobject.hasOwnProperty("Movie")) { 
            video = contentobject.Movie[0].LaunchMovie[0]; 
            componentpack.push(<Video video={video}/>);
        }
              }
              
        //PRACTICE
        var practice;
        if (object.hasOwnProperty("QuestionBlock")) {
        practiceobject = object.QuestionBlock[0];
        
        if (practiceobject.hasOwnProperty("MatchingActivity")) {
            practice = practiceobject.MatchingActivity[0];
            componentpack.push(<Matching data={practice}/>);
         }
        
        else if (practiceobject.hasOwnProperty("MultipleChoice")) {
            practice = practiceobject.MultipleChoice[0];
            componentpack.push(<MC data={practice}/>);
         }
        }
       
        return (
        
            <div style= {conceptStyle} className="col-md-12">
                {componentpack}
            </div>
       
        );
    }
});

var Image = React.createClass({
     render: function () {
     
     var imgStyle = {
       maxHeight: "500px",
       marginTop: "10px",
       marginBottom: "10px",
       display: "block",
     };
     
     return (
     <div>
     <img style={imgStyle} src={this.props.image}/>
     </div>
      );
     }
   });

var Video = React.createClass({
      render: function () {
        
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
        
        var playerStyle = {
            border: "none",
            width:"100%",
            height: '350px',
            display:"block",
            position:"relative",
        };
        
        return (
           <div style={{width:"100%"}} className="responsive-video">
                <iframe className="subtle-shadow" style={{margin:'0 auto', display:'block', border:'none'}} src={this.props.video} allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" align="middle" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
                {/*<iframe style={playerStyle}  src={this.props.video} frameborder="0" allowfullscreen></iframe>*/}
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
             <span style={{marginTop: "10px",
       marginBottom: "10px",}}>{this.props.text}</span>
            </div>
        </div>
    </div>
              )}
});

var Matching = React.createClass({
     componentDidMount: function() {
         var clicked;
         var anycard = ($(".card"))
         var set1card = ($(".set1 .card"));
         var set2card = ($(".set2 .card"));
       

        set1card.click(function(){
        $.each(set1card, function(){
    //remove clicked highlight when second set is clicked
        if ($(this).attr("data-clicked") !== "done") {
        $(this).attr("data-clicked", "no");
    }
  });
    //switch clicked to yes and set clicked variable
        if ($(this).attr("data-clicked") !== "done") {
        $(this).attr("data-clicked", "yes");
        clicked = $(this);
  }
});
        set2card.click(function(){
        if (clicked.attr("data-num") == $(this).attr("data-num")) {
    
        $( ".feedback" ).empty().append( "<p>You are correct!</p>" );
        clicked.attr("data-clicked", "done");
        $(this).attr("data-clicked", "done");
  }
        if (clicked.attr("data-num") != $(this).attr("data-num")) {
    
        $( ".feedback" ).empty().append( "<p>You are wrong!</p>" );
  }
});
     },
     
     render: function () {
        
        ///////////////////////////////////////////////////////Array makin'
         var practice = this.props.data;
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
        distractorarray.map(function(dist, id) {
        console.log(id);
        randomarray.push(<div data-num={id} data-clicked="no" className="card">{dist}</div>);
        });
        Shuffle(randomarray);
///////////////////////////////////////////////////////// 
        
        return (
        <div className="col-sm-12">
        
        <p>{practice.QuestionStem[0].RichText}</p>
        <div className="set1 col-sm-6">
        {
       randomarray.map(function(dist) {
        //console.log(dist);
        return dist;
        })
        }
        </div>
        <div className="set2 col-sm-6">
               {
               matcharray.map(function(mat, id) {
               return <div data-num={id} data-clicked="no" className="card">{mat}</div>;
        })
                   
               }
        </div>
        
        <div style={{display: 'block', color:'black', margin:'30px'}} className="feedback col-sm-12"></div>
        
        </div>
        );
     }});
 
var MC = React.createClass({
     componentDidMount: function() {
         $("input").click(function() {
        var qnum = $(this).parent().attr('id');
        if($(this).attr("data-t") == "true") {
        $( ".feedback" + qnum ).empty().append( "<p>You are correct!</p>" );
    }
        else {
        $( ".feedback" + qnum ).empty().append( "<p>You are wrong.</p>" );
  }
}
  );
     },
     
     render: function () {
    ///////////////////////////////////////////////////////Array makin'
         
         var practice = this.props.data;
         var choices = practice.Option;
         var optionArray = [];
         var randomArray = [];
        
         var Shuffle = function (o) {
     	 for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	     return o;
        };
         
       $.each(choices, function(index, value) {
          if (value.$.IsCorrect == "false") {
              optionArray.push(<input type="radio" name="1" data-t={false}>{this.Distractor[0].RichText}<br/></input>);
          }
          else if (value.$.IsCorrect == "true") {
              optionArray.push(<input type="radio" name="1" data-t={true}>{this.Distractor[0].RichText}<br/></input>);
          }
       });
        optionArray = Shuffle(optionArray);
    
    //////////////////////////////////////////////////

        return (
        <div className="col-sm-12">
        <p>{practice.QuestionStem[0].RichText}</p>
        
        <div id="1">{optionArray}</div>
      
        <div style={{marginTop: '5px'}}className="feedback1"></div>
        
        </div>);
     }});        

module.exports = Concept;

