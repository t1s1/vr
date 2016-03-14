var React = require("react");

var Slides = React.createClass({
    
    render: function () {
        var slidesNodes = this.props.data.map(function (slideNode, index) {
            var isActive = this.props.currentSlide === index;
            return (
                <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} action={slideNode.action} actionHref={slideNode.actionHref} />
            );
        });
        
        return (
            <div className="slides">
                {slidesNodes}
            </div>
        );
    }
})

module.exports = Slides;