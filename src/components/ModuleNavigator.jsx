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
        
        var moduleNavStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#6789AB"
        };
        
        return (
            <div  style= {moduleNavStyle}>
                <div className="controls">
                    <div className="btn btn-default" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div className="btn btn-default" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
                </div>
                <Modules data={this.props.modules} currentModule={this.state.currentModule} />
            </div>
        );
    }
});

var Modules = React.createClass({
    render: function() {
        var currentModule = this.props.currentModule;
        var ModuleNodes = this.props.data.map(function (ModuleNode, index) {
            var isActive = currentModule === index;

            return (
                <ModuleContainer active={isActive} key={ModuleNode.id} title={ModuleNode.title} subtitle={ModuleNode.subtitle} text={ModuleNode.text} />
            );
        });
    
        return (
            <div className="col-sm-12">
                {ModuleNodes}
            </div>
        );
    }
});

var ModuleContainer = React.createClass({
    render: function() {
        var hide = { display: "none" };
        var show = { display: "block"};
        
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
                <h6 style={{color:"#000"}}>Module Container</h6>
                <Module title={this.props.title}/>
            </div>
        );
    }
});

module.exports = ModuleNavigator;