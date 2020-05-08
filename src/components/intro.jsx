import React from "react";
import "../styles/intro.css";
import "../styles/animations.css"

const Intro = props => {
  return (
    <div id="intro" className="d-flex align-items-center justify-content-start">
        <div className="container">

            <div className="row d-flex align-items-center justify-content-start fade-in-fwd">
                <div className="col-12">
                    <h1 className="intro-h1">
                        <span className="text-white">Hello, My Name Is </span><span className="text-info">Traeger Winn</span>
                    </h1>
                </div>
                <div className="col-12">
                    <h1 className="text-white intro-h1">I'm a Web Developer</h1>
                </div>
            </div>

            <div className="row d-flex align-items-center justify-content-start pt-3 pb-4 fade-in-fwd-2nd">
                <div className="col-12">
                    <h3 className="text-white font-weight-normal intro-h3">Have a project, idea or problem you'd like to discuss?</h3>
                </div>
                <div className="col-12">
                    <h3 className="text-white font-weight-normal intro-h3">
                        Let's chat <a href="mailto:traeger.winn@gmail.com" className="my-link">traeger.winn@gmail.com</a>
                    </h3>
                </div>
            </div>

            <div className="row d-flex align-items-center justify-content-start fade-in-fwd-btn">
                <div className="col-12">
                    <button className="btn btn-lg btn-outline-info text-white pr-5 pl-5 intro-btn" onClick={props.onViewWorkClick}>
                        <span className="font-weight-bolder">View My Work</span> <i className="fa fa-arrow-right my-arrow"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
};
export default Intro;