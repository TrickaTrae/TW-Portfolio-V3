import React from "react";
import "../styles/intro.css";

const Intro = props => {
  return (
    <div id="intro" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid">
            <div className="slide-in-right">
                <div className="row d-flex align-items-center justify-content-center">
                    <h1 className="text-center">
                        <span className="text-white">Hello, I'm </span><span className="text-info">Traeger Winn</span>
                    </h1>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <h1 className="text-white text-center">I'm a full-stack web developer</h1>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center slide-in-left">
                <button className="btn btn-lg btn-outline-info text-white m-2 intro-btn" onClick={props.onViewWorkClick}><span className="intro-btn-text">View my work</span> <i className="fa fa-arrow-right my-arrow"></i></button>
            </div>
        </div>
    </div>
  );
};
export default Intro;
