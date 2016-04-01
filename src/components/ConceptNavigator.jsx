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
        
        
        var conceptNavigatorStyle = {
            padding: 10,
            background: "LightBlue"
        };
       return (
            <div style= {conceptNavigatorStyle} className="col-sm-12">
                <div className="controls">
                    <h6 style={{color:"#000"}}>Concept Navigator</h6>
                    <div className="btn btn-default" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div className="btn btn-default" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
                    <ConceptProgress concepts={this.props.concepts}/>
                </div>
                {ConceptNodes}
            </div>
        );
        
    }
});

var ConceptsContainer = React.createClass({
    render: function() {
            var ConceptsContainerStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "yellow",
            display: this.props.active ? "block" : "none"
        };
        return (
            <div style= {ConceptsContainerStyle} className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#000"}}>Concept Container</h6>
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

   
  return(
      
      
      <ol>
      <h6>Concept Progress</h6>
      {concepts.map(function(concept) {
        return <li key={concept.id}>{concept.Title[0]}</li>;
        })}
      
      
      </ol>);
  }
})
    

module.exports = ConceptNavigator;