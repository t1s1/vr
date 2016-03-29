var React = require("react");
var Concept = React.createClass({
    
    render: function () {
        var conceptStyle = {
            padding: 10,
            background: "gray",
            border: "#5555BB"
          };
        
        var junk = "derp";
        var object = this.props.data;
         //Checking for ParaBlock vs QuestionBlock
        var contentobject;
        var practiceobject;
      
        if (object.hasOwnProperty("ParaBlock")) {
        contentobject = object.ParaBlock[0];
        }
        else if (object.hasOwnProperty("QuestionBlock")) {
        practiceobject = object.QuestionBlock[0];
        }
        
       
        //IMAGE
        var image;
        if(contentobject.hasOwnProperty("Figure")) {
            image = contentobject.Figure[0].MediaObject[0].Renditions[0].Web[0].$.uri;
        }
        else {
            image = junk;
        }
        
        //VIDEO
        var video;
        if(contentobject.hasOwnProperty("Video")) { //placeholder query
            video = object; // not done
        }
        else {
            image = junk;
        }
        
        //TEXT
        var text;
        if(contentobject.hasOwnProperty("RichText")) {
            text = contentobject.RichText;
        }
        else {
            image = junk;
        }

        var practice;
        if (practiceobject.hasOwnProperty("QuestionBlock")) { //placeholder query
            practice = object; // not done
        }
        else {
            image = junk;
        }
        
        
        return (
        <div style= {conceptStyle} className="col-sm-12">
            <Image image={image} />
            <Video video={video} />
            <Text text={text} />
            <Practice practice={practice} />
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
            background: "white",
            border: "#5555BB"
        };

        return (
            <div style= {playerStyle} className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>Video Player</h6>
                {/*<iframe width="420" height="315" src="https://www.youtube.com/embed/qDVtih6Bw-U" frameborder="0" allowfullscreen></iframe>*/}
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