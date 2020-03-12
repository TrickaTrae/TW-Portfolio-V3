import React from "react";
import "../styles/intro.css";
import "../styles/animations.css"

const Intro = props => {
  return (
    <div id="intro" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid">
            <div className="fade-in-fwd">
                <div className="row d-flex align-items-center justify-content-center">
                    <h1 className="text-center intro-h1">
                        <span className="text-white">Hello, My Name Is </span><span className="text-info">Traeger Winn</span>
                    </h1>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <h1 className="text-white text-center intro-h1">I'm a Full-Stack Web Developer</h1>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center fade-in-fwd-btn">
                <button className="btn btn-lg btn-outline-info text-white m-2 pr-5 pl-5 intro-btn" onClick={props.onViewWorkClick}>
                    <span className="font-weight-bolder">View My Work</span> <i className="fa fa-arrow-right my-arrow"></i>
                </button>
            </div>
        </div>
    </div>
  );
};
export default Intro;