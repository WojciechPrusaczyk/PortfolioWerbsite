import React from "react";

function Details(props) {
    return (
        <div className="progressBarParent" data-techn-name={props.name}>
            <p><div className={"nameWithLogo"}><img src={props.source} alt={props.name + " logo"} className="icon"/><h3 className={"my-1"}>{props.name}</h3></div></p>
            <div className="progressBar">
                <div className="progress" style={{width: props.progress}}><span className="progress-percent">{props.progress}</span></div>
            </div>
        </div>
    );
}

class TechnologiesHeader extends React.Component {
    constructor(props) {
        super(props);
        this.values = {
            name: "",
            source: "#",
            progress: 0,
        }
    };

    renderBar(name, source, progress){
        return (<Details
            name={name}
            source={source}
            progress={progress+"%"}
        />);
    }

    render() {
        return (
            <div className="technologies paragraph flex-row row justify-content-around">
                <div className="flex-column col-xl-3 col-sm-5 col-12">
                    <h2>Programming languages</h2><br/>
                    {this.renderBar("PHP", "/build/images/PHP.png", 70)}
                    <br/><br/>

                    {this.renderBar("JavaScript", "/build/images/JS.png", 70)}
                    <br/><br/>

                    {this.renderBar("VBA", "/build/images/VB.png", 35)}
                    <br/><br/>
                </div>
                <div className="flex-column col-xl-3 col-sm-5 col-12 m-sm-0 m-5">
                    <h2>Frameworks and DataBases</h2><br/>
                    {this.renderBar("Symfony", "/build/images/Symfony.png", 70)}
                    <br/><br/>

                    {this.renderBar("ReactJS", "/build/images/ReactJS.png", 30)}
                    <br/><br/>

                    {this.renderBar("MariaDB", "/build/images/MariaDB.png", 75)}
                    <br/><br/>

                    {this.renderBar("Zend", "", 30)}
                    <br/><br/>
                </div>
                <div className="flex-column col-xl-3 col-sm-6 col-12 m-sm-0 m-5">
                    <h2>Other tools</h2><br/>

                    {this.renderBar("HTML5", "/build/images/HTML5.png", 80)}
                    <br/><br/>

                    {this.renderBar("CSS3 / SASS", "/build/images/HTML5.png", 65)}
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default TechnologiesHeader;