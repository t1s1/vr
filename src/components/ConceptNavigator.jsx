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
            
            background: "none",
            padding: "12px 22px",
            border: "2px solid #E6E7E8",
            color: "#CCCCCC",
            margin: "0px 0px 20px 15px",
            borderRadius: "0",
            fontFamily: "Century Gothic, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
            display:"inline-block"
            
        };
        
       
        
        
        
       return (
           <div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
            <div className="container">
                <div className="navbar-text pull-right">
                        
                            
                            <ConceptProgress concepts={this.props.concepts}/>
                        
                        {ConceptNodes}
                   
                    <div className="col-sm-9"></div>
                   
                </div>
               
             </div>
              <div style={{marginTop:"500px"}}>
                    <h6 style={{color:"#000", paddingLeft:"15px"}}>Concept Navigator</h6>
                    <div style={challengeButtonDupl} className="btn btn-primary" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div style={challengeButtonDupl} className="btn btn-primary" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
              </div>
            </div>
        );
        
    }
});

var ConceptsContainer = React.createClass({
    render: function() {
            
            var ConceptsContainerStyle = {
            background: "none",
            display: this.props.active ? "block" : "none",
            marginTop:"25px",
            padding:"0",
            margin:"0"
            //this is the main outer concept wrapper
            
        };
        return (
            <div style= {{position:"relative"}}>
                <div style= {ConceptsContainerStyle} className="col-sm-12">
                    {/* to be replaced with dynamic content */}
                    {/*<h6 style={{color:"#000"}}>Concept Container</h6>*/}
                    <ConceptPage title={this.props.title} subtitle={this.props.subtitle} data={this.props.data} /> 
                </div>
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