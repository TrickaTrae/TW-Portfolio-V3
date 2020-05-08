import React from "react";
import "./footer.css";

const Footer = props => {
  return (
    <div id="footer" ref={props.footerRef} className="pt-5 pb-5">
        <div className={props.animateFooter ? "container" : "d-none"}>
            <div className="row d-flex align-items-center justify-content-start fade-in-fwd-footer">
                <div className="col-12">
                    <h2 className="text-info">Traeger Winn</h2>
                </div>
                <div className="col-12 col-md-6">
                    <h5 className="text-white">I'm a Full-Stack Web Developer. I can help you solve a problem, build a product, or grow an existing project.</h5>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-start pt-3 pb-5 fade-in-fwd-icons">
                <div className="col-12">
                    {/* eslint-disable-next-line */}
                    <a name="email" href="mailto:traeger.winn@gmail.com" className="fa fa-envelope fa-3x text-white my-icon" />
                    {/* eslint-disable-next-line */}
                    <a name="linkedin" href="https://www.linkedin.com/in/traegerwinn/" className="fa fa-linkedin-square fa-3x text-white ml-4 my-icon" />
                    {/* eslint-disable-next-line */}
                    <a name="github" href="https://github.com/TrickaTrae" className="fa fa-github fa-3x text-white ml-4 my-icon" />
                </div>
            </div>
            <div className="row fade-in-fwd-copyright">
                <div className="col">
                    <i className="fa fa-copyright text-secondary" aria-hidden="true"> 2020 Traeger Winn</i>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Footer;