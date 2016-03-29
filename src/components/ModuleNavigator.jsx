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
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#6789AB"
        };
        
        return (
            <div style= {moduleNavStyle} className="col-sm-12">
                <div className="controls">
                    <div className="btn btn-default" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div className="btn btn-default" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
                </div>
                {ModuleNodes}
            </div>
        );
    }
});

var ModuleContainer = React.createClass({
    render: function() {
        
        var moduleContainerStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#BA9876",
            display: this.props.active ? "block" : "none"
        };
        
        return (
            <div style= {moduleContainerStyle} className="col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#000"}}>Module Navigator</h6>
                <Module title={this.props.title} subtitle={this.props.subtitle} data={this.props.data} /> {/*add here*/}
            </div>
        );
    }
});

module.exports = ModuleNavigator;