var React = require("react");
var ConceptPage = require("./ConceptPage.jsx");

var ConceptNavigator = React.createClass({
      getInitialState: function() {
       console.log(this.props.concepts.length);
        return {
            currentConcept: this.props.initialConcept,
            prevEnabled  : this.props.initialConcept !== 0,
            nextEnabled  : this.props.initialConcept !== this.props.concepts.length - 1 
        };
    },
    
    togglePrev: function() {
        console.log(this.state.currentConcept);//Evan's test junk...........................
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
        console.log(this.state.currentConcept);
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
        //console.log(this.props.concepts.Topic);
        var ConceptNodes = this.props.concepts.Topic.map(function (conceptNode, index) { //!!!! DOESNT WORK
            var isActive = currentConcept === index;
            var genKey = conceptNode["$"]["xy:guid"];

            return (
                <ConceptsContainer active={isActive} key={genKey} title={conceptNode.Title}/>
            );
        });
        
        
    
        var conceptNavigatorStyle = {
            padding: 10,
            background: "LightBlue"
        };
        
       return (
            <div style= {conceptNavigatorStyle} className="col-sm-12">
                <div className="controls">
                    <div className="btn btn-default" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div className="btn btn-default" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
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
                <h6 style={{color:"#000"}}>Concept Navigator</h6>
                <ConceptPage title={this.props.title} subtitle={this.props.subtitle} /> {/*FIGURE OUT WHAT DATA THE CONCEPT PAGE NEEDS*/}
            </div>
        );
    }
});



module.exports = ConceptNavigator;