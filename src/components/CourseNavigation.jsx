var React = require("react");

var CourseNavigation = React.createClass({
    getInitialState: function() {
        return {
            currentSlide: this.props.initialModule,
            prevEnabled : this.props.initialModule !== 0,
            nextEnabled : this.props.initialModule !== this.props.modules.length - 1
        };
    },
    
    togglePrev: function() {
        var current = this.state.currentSlide;
        var prev = --current;
        
        this.setState({nextEnabled: true});
        
        if(this.state.prevEnabled) {
            if (prev <= 0) {
              // WE ARE AT BEGINNING, so disable prev button
              this.setState({prevEnabled: false});
            }

            this.setState({currentSlide: prev});
        }
        
    },
    toggleNext: function() {
        var current = this.state.currentSlide;
        var next = ++current;
        
        this.setState({prevEnabled: true});
        
        if(this.state.nextEnabled) {
            if (next >= this.props.modules.length - 1) {
                // WE ARE AT END, so disable next button
                this.setState({nextEnabled: false});
            }

            this.setState({currentSlide: next});
        }  
    },
    
    render: function() {
        
        var CourseNavStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#6789AB"
        };
        
        return (
            <div className="slideshow">
                <Slides data={this.props.modules} currentSlide={this.state.currentSlide} />
                {/* <Pagination data={this.props.modules} /> */}
                <div className="controls">
                    <div className="btn btn-default" onClick={this.togglePrev} disabled = {!this.state.prevEnabled}>Prev</div>
                    <div className="btn btn-default" onClick={this.toggleNext} disabled = {!this.state.nextEnabled}>Next</div>
                </div>
            </div>
        );
    }
});

var Slides = React.createClass({
    render: function() {
        var currentSlide = this.props.currentSlide;
        var slidesNodes = this.props.data.map(function (slideNode, index) {
            var isActive = currentSlide === index;
            console.log("currentSlide: "+currentSlide+"   index: "+index);
            return (
                <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} />
            );
        });
    
        return (
            <div className="slides">
                {slidesNodes}
            </div>
        );
    }
});

var Slide = React.createClass({
    render: function() {
        var hide = { display: "none" };
        var show = { display: "block"};
        
        var CourseNavStyle = {
            marginTop: 10,
            padding: 10,
            border: "1px solid #000022",
            background: "#6789AB",
            display: this.props.active ? "block" : "none"
        };
        
        return (
            <div style= {CourseNavStyle}>
                <h6 style={{color:"#DD3300"}}>Course Navigation</h6>
                <img src={this.props.imagePath} alt={this.props.imageAlt} />
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
});

module.exports = CourseNavigation;