var React = require("react");
var ConceptPage = require("./ConceptPage.jsx");

var ConceptNavigator = React.createClass({
      getInitialState: function() {
        return {
            currentConcept: this.props.initialConcept,
            prevEnabled  : this.props.initialConcept !== 0,
            nextEnabled  : this.props.initialConcept !== this.props.concepts.length - 1 
        };
    },
    
    togglePrev: function() {
        var current = this.state.currentConcept;
        var prev = --current;
        this.setState({nextEnabled: true});
        
        if(this.state.prevEnabled) {
            if (prev <= 0) {
              // At first concept, so disable prev button
              this.setState({prevEnabled: false});
            }

            this.setState({currentConcept: prev});
        }
        
    },
    
        toggleNext: function() {
        var current = this.state.currentConcept;
        var next = ++current;
        
        this.setState({prevEnabled: true});
        
        if(this.state.nextEnabled) {
            if (next >= this.props.concepts.length - 1) {  
                // At last concept, so disable next button
                this.setState({nextEnabled: false});
            }

            this.setState({currentConcept: next});
        }  
    },
    
     componentDidMount: function() {
      $(".backToModules").click( function() {
          $( ".moduleChoice" ).css( "display", "block" );
          $( ".moduleButtons" ).css( "display", "block" );
          $( ".conceptWrapper" ).css( "display", "none" );
          $( ".accentBkg" ).css( "display", "none" );
         
      });
  },
    
    render: function () {
        var currentConcept = this.state.currentConcept;
        var index;
        var ConceptNodes = this.props.concepts.map(function (conceptNode, index) { 
            var isActive = currentConcept === index;
            index = index; //test
            var genKey = conceptNode["$"]["xy:guid"];
            return (
                <ConceptsContainer index={index} active={isActive} key={genKey} data={conceptNode} title={conceptNode.Title}/>
            );
        });
        
        
       
        
        var challengeButtonDupl = {
            
            background: "white",
            padding: "12px 22px",
            border: "2px solid #E6E7E8",
            color: "#CCCCCC",
            margin: "20px 0px 20px 15px",
            borderRadius: "0",
            fontFamily: "Century Gothic, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            display:"inline-block"
            
        };
        
       var conceptBox = {
       
       //height: "80%",
       };
       
       var buttonBar = {
           position:"fixed",
           bottom:"0",
           background: "#ffffff",
           width: "100%",
           borderTop: "2px solid #E6E7E8",
       };
        
        
        
       return (
           
            {/*
            Evan hid this -- not currently showing concept progress
            <div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
            <div className="container">
                <div className="navbar-text pull-right">
                        <ConceptProgress concepts={this.props.concepts}/>
                                        <div className="col-sm-9"></div>
                              </div>
                </div>
             </div>
             */},
             
              <div style={conceptBox}>
               {ConceptNodes}
                    <div style={buttonBar}>
                    <div style={challengeButtonDupl} className="btn btn-primary" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div style={challengeButtonDupl} className="btn btn-primary" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
                    <div style={challengeButtonDupl} className="btn btn-primary backToModules" onClick={this.toggleNext}>Back to Modules</div>
                    </div>      
              </div>
           
        );
        
    }
});

var ConceptsContainer = React.createClass({
    render: function() {
            
            var ConceptsContainerStyle = {
           
            display: this.props.active ? "block" : "none",
            
            
            //this is the main outer concept wrapper
            
        };
        return (
           
                <div style= {ConceptsContainerStyle} className="col-sm-12">
                    <ConceptPage title={this.props.title} subtitle={this.props.subtitle} data={this.props.data} /> 
                </div>
          
        );
    }
});


/*This is intended to be some kind of menu to select a concept without having to flip through them. 
Could be a drop down or something?
I don't think we prototyped this, but could be worth adding.
The list items aren't linked to anywhere yet. 
*/

var ConceptProgress = React.createClass({ 
  render: function()
  {
  var concepts = this.props.concepts;

    var conceptProgressHeader = {
        color: "green"
        
    };
   
  return(
     <div>
     {/* <h6 style={conceptProgressHeader}>Concept Progress</h6>*/}
     {/* <ol style={conceptProgressHeader}>
      {concepts.map(function(concept) {
        return <li key={concept.id}>{concept.Title[0]}</li>;
        })}
      
      
      </ol>*/}
      </div>
      );
  }
});
    

module.exports = ConceptNavigator;