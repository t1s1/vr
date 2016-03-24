var React = require("react");

var Promise = React.createClass({
    
    render: function () {
        console.log("this is data passed to promise comp: " + this.props.data);
        var promiseStyle = {
            padding: 10,
            background: "#345678"
        };
        
        return (
            <div style= {promiseStyle} className="text-left col-sm-12">
                {/* to be replaced with dynamic content */}
                <h6 style={{color:"#DD3300"}}>module title: {this.props.data.Lesson[0].Title}</h6>
                <p>Promise: {this.props.data.Lesson[1].SubTitle}</p>
            </div>
        );
    }
});

module.exports = Promise;