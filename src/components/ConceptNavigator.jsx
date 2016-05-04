var React = require("react");
var ConceptPage = require("./ConceptPage.jsx");

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
           borderTop: "2px solid #E6E7E8"
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
                    <button type="button" style={challengeButtonDupl} className="btn btn-primary" onClick={this.togglePrev} disabled = {!this.state.prevEnabled} role="button">Prev</button>
                    <button type="button" style={challengeButtonDupl} className="btn btn-primary" onClick={this.toggleNext} disabled = {!this.state.nextEnabled} role="button">Next</button>
                    <button type="button" style={challengeButtonDupl} className="btn btn-primary backToModules" onClick={this.toggleNext} role="button">Back to Modules</button>
                    <ModalPop />
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
          Challenge
        </Button>
    

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={this.close} role="button">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
/*end of bootstrap modal component*/
    

module.exports = ConceptNavigator;