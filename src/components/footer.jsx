import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div id="footer">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col icon-col text-center">
                    {/* eslint-disable-next-line */}
                    <a href="mailto:traeger.winn@gmail.com" className="fa fa-envelope fa-3x text-white my-icon" />
                </div>
                <div className="col icon-col text-center">
                    {/* eslint-disable-next-line */}
                    <a href="https://www.linkedin.com/in/traegerwinn/" className="fa fa-linkedin-square fa-3x text-white my-icon" />
                </div>
                <div className="col icon-col text-center">
                    {/* eslint-disable-next-line */}
                    <a href="https://github.com/TrickaTrae" className="fa fa-github fa-3x text-white my-icon" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col text-center">
                    <i className="fa fa-copyright text-secondary" aria-hidden="true"> 2019 Traeger Winn</i>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Footer;
