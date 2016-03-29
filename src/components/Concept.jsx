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
        
        else if (object.hasOwnProperty("QuestionBlock")) {
        practiceobject = object.QuestionBlock[0];
        var practice;
        if (practiceobject.hasOwnProperty("QuestionBlock")) { //placeholder query
            practice = object; // not done
            componentpack.push(<Practice practice={practice}  />);
        }
        
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

var Practice = React.createClass({
     render: function () {
         return (
         <h6>interactive / practice stuff here</h6>
         )}
});


module.exports = Concept;