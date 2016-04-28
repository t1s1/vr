var React = require("react");
var Module = require("./Module.jsx");

var ModuleNavigator = React.createClass({
    getInitialState: function() {
        return {
            currentModule: this.props.initialModule,
            prevEnabled  : this.props.initialModule !== 0,
            nextEnabled  : this.props.initialModule !== this.props.modules.length - 1
        };
    },
    
    togglePrev: function() {
        var current = this.state.currentModule;
        var prev = --current;
        
        this.setState({nextEnabled: true});
        
        if(this.state.prevEnabled) {
            if (prev <= 0) {
              // WE ARE AT BEGINNING, so disable prev button
              this.setState({prevEnabled: false});
            }

            this.setState({currentModule: prev});
        }
      },
      
    toggleNext: function() {
        var current = this.state.currentModule;
        var next = ++current;
        
        this.setState({prevEnabled: true});
        
        if(this.state.nextEnabled) {
            if (next >= this.props.modules.length - 1) {
                // WE ARE AT END, so disable next button
                this.setState({nextEnabled: false});
            }

            this.setState({currentModule: next});
        }  
    },
    
    render: function() {
        var currentModule = this.state.currentModule;
        
        var ModuleNodes = this.props.modules.map(function (moduleNode, index) { 
            var isActive = currentModule === index;
            var genKey = moduleNode["$"]["xy:guid"];

            return (
                <ModuleContainer active={isActive} key={genKey} title={moduleNode.Title} subtitle={moduleNode.SubTitle} data ={moduleNode} text={moduleNode.text} />
            );
        });
        
        var moduleNavStyle = {
            
           
            background: "none"
        };
        
        
        var challengeButton = {
            
            background: "none",
            padding: "12px 22px",
            border: "2px solid #E6E7E8",
            color: "#CCCCCC",
            margin: "0px 0px 20px 15px",
            borderRadius: "0",
            fontFamily: "Century Gothic, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "20px",
            display:"inline-block" //unhide this when want to see front page
            
        };
        
        return (
            <div className="row">
                <div style= {moduleNavStyle} className="col-lg-12 noPad">
                     {ModuleNodes}
                    <div className="controls pull-right control-wrapper">
                        
                        <button style = {challengeButton} type="button" className="btn btn-primary" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</button>
                        <button style = {challengeButton} type="button" className="btn btn-primary" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</button>
                    </div>
                   
                </div>
            </div>//end of outer-row
        );
    }
});

var ModuleContainer = React.createClass({
    render: function() {
        
        var moduleContainerStyle = {
          
            display: this.props.active ? "block" : "none"
        };
        
        return (
            <div style= {moduleContainerStyle} className="col-lg-12">
                {/* to be replaced with dynamic content */}
                
                <Module title={this.props.title} subtitle={this.props.subtitle} data={this.props.data} /> {/*add here*/}
            </div>//end of MODULE CONTAINER
        );
    }
});

module.exports = ModuleNavigator;