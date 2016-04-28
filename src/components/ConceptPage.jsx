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
                    
                        <div style= {promiseStyle} className="col-lg-12">
                            {/* to be replaced with dynamic content */}
                            
                            <h6 style={{color:"#DD3300"}}>{/*Concept Page*/}</h6>
                            
                            <h3 style={{color:"#fff", fontFamily:"Century Gothic, sans-serif",fontWeight:"bold"}}>{this.props.title} to Agile Methods 121.</h3>{/*This said Welcome*/}
                            <Concept data={this.props.data} title={this.props.data.Title}/>
                            {/* <VideoPlayer /> */}
                        </div>
                        {/*<div style={{background:"#E6E8E8", height:"250px", position:"relative", zIndex:"-1", width:"100%", margin:"0 auto"}} className="col-md-12"></div>*/}
                   
                </div>
            </div>
            
        );
    }
});

module.exports = ConceptPage;