import React from "react";
import "../styles/footer.css";

const Footer = props => {
  return (
    <div id="footer" ref={props.footerRef}>
        <div className={props.animateFooter ? "container" : "d-none"}>
            <div className="row d-flex justify-content-center">
                <div className="col icon-col text-center slide-in-left">
                    {/* eslint-disable-next-line */}
                    <a name="email" href="mailto:traeger.winn@gmail.com" className="fa fa-envelope fa-3x text-white my-icon" />
                </div>
                <div className="col icon-col text-center slide-in-top">
                    {/* eslint-disable-next-line */}
                    <a name="linkedin" href="https://www.linkedin.com/in/traegerwinn/" className="fa fa-linkedin-square fa-3x text-white my-icon" />
                </div>
                <div className="col icon-col text-center slide-in-right">
                    {/* eslint-disable-next-line */}
                    <a name="github" href="https://github.com/TrickaTrae" className="fa fa-github fa-3x text-white my-icon" />
                </div>
            </div>
            <div className="row mt-4 puff-in-center">
                <div className="col text-center">
                    <i className="fa fa-copyright text-secondary" aria-hidden="true"> 2019 Traeger Winn</i>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Footer;
