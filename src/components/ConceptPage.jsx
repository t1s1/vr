var React = require("react");
var Concept = require("./Concept.jsx");
var ConceptPage = React.createClass({
    
    render: function () {
        
        var promiseStyle = {
            padding: 10,
            background: "none",
            position: "relative",
            margin: "0 auto"
        };
        
    
        
        return (
            <div className="container">
                <div className="row">

                    <div style= {promiseStyle} className="col-sm-12">
                        <h3 style={{color:"#fff", fontFamily:"Century Gothic, sans-serif",fontWeight:"bold"}}>{this.props.title}</h3>
                            <Concept data={this.props.data} title={this.props.data.Title}/>
                    </div>
                </div>
            </div>
            
        );
    }
});

module.exports = ConceptPage;