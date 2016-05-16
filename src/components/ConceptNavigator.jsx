var React = require("react");
var ConceptPage = require("./ConceptPage.jsx");
var Challenge = require("./Challenge.jsx");
var LabPlayer = require("./LabPlayer.jsx");

/*requires for react-bootstrap components*/
var Button = require("react-bootstrap/lib/Button");
var Tooltip = require("react-bootstrap/lib/Tooltip");
var Popover = require("react-bootstrap/lib/Popover");
var Modal = require("react-bootstrap/lib/Modal");
var ModalHeader = require("react-bootstrap/lib/ModalHeader");
var ModalTitle = require("react-bootstrap/lib/ModalTitle");
var ModalBody = require("react-bootstrap/lib/ModalBody");
var OverlayTrigger = require("react-bootstrap/lib/OverlayTrigger");
var ModalFooter = require("react-bootstrap/lib/ModalFooter");
/*end of react-bootstrap requires*/

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
            
            background: "#0BA6E0",
            padding: "12px 22px",
            border: "none !important",
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
           bottom:"0px",
           background: "#fff",
           width: "100%"
           
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
                    <div className="row" style={buttonBar}>
                        <div className="col-sm-12">
                            <button type="button" style={challengeButtonDupl} className="btn btn-primary prevBtnStyle" onClick={this.togglePrev} disabled = {!this.state.prevEnabled} role="button">Prev</button>
                            <button type="button" style={challengeButtonDupl} className="btn btn-primary nextBtnStyle" onClick={this.toggleNext} disabled = {!this.state.nextEnabled} role="button">Next</button>
                            <button type="button" style={challengeButtonDupl} className="btn btn-primary backToModules bkModuleBtnStyle" onClick={this.toggleNext} role="button">Back to Modules</button>
                            <ModalPop data={this.props.data} />
                        </div>
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



/*Attempting to implement a bootstrap modal window react component*/

var ModalPop = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
      <div style={{display:"inline-block"}} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        
        
        <Button type="button" className="btnOverRides" bsStyle="primary" bsSize="large" role="button" onClick={this.open}>
          Take The Challenge
        </Button>
    
        
        <Modal show={this.state.showModal} onHide={this.close}>
      
          <Modal.Header style={{background:"#0D4C85"}} closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily:"Century Gothic, sans-serif"}}>
            <div className="row">
                <div className="col-md-4">
                    <Challenge data={this.props.data} />
                    
        
        {/*
                    <h4>Popover in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
        
                    <h4>Tooltips in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
                    
                    */}
                </div>{/*end of body left*/}
                <div className="col-md-8 remove-pad-left">
                     <LabPlayer />
                </div>

            </div>{/*end of nested row*/}
          </Modal.Body>
          <Modal.Footer style={{background:"#fff"}}>
            <Button style={{background:"#0BA6E0",color:"#fff"}} type="button" onClick={this.close} role="button">Close</Button>
          </Modal.Footer>
      
        </Modal>
        
       
        
      </div>/*modal container*/
    );
  }
});
/*end of bootstrap modal component*/
    

module.exports = ConceptNavigator;