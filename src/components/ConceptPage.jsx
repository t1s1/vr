var React = require("react");
var Concept = require("./Concept.jsx");
var ConceptPage = React.createClass({
    
    render: function () {
        
        
        var outerConcept = {
            background: "none",
            marginTop:"25px",
            padding:"0",
            margin:"0 auto",
            width: "100%",
        }    
    
        
        return (
            <div className="container" style={outerConcept}>
                <div className="row">
                    <div className="col-sm-12">
                        <h3 style={{paddingLeft: '0px', color:"#fff", fontFamily:"Century Gothic, sans-serif"}}>{this.props.title}</h3>
                         <Concept data={this.props.data} title={this.props.data.Title}/>
                    </div>
                </div>
            </div>
            
        );
    }
});

module.exports = ConceptPage;