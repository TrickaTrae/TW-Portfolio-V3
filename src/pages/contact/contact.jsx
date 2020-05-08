import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div id="contact" className="d-flex align-items-center justify-content-start">
            <div className="container fade-in-fwd">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-secondary display-4">
                            Have a <span className="text-white">project</span>,
                             an <span className="text-white">idea</span>, or a <span className="text-white">problem</span> you'd like to discuss?
                        </h1>
                    </div>
                    <div className="col-12">
                        <h1 className="text-secondary display-4">
                            Let's chat, <a href="mailto:traeger.winn@gmail.com" className="text-white text-break">traeger.winn@gmail.com</a>
                        </h1>
                    </div>
                    <div className="col-12 pt-5">
                        <a name="linkedin" href="https://www.linkedin.com/in/traegerwinn/">
                            <i className="fa fa-linkedin fa-4x text-secondary my-icon" aria-hidden="true"></i>
                        </a>
                        <a name="github" href="https://github.com/TrickaTrae">
                            <i className="fa fa-github fa-4x text-secondary ml-4 my-icon" aria-hidden="true"></i>
                        </a>
                        <a name="blog" href="https://medium.com/@traeger.winn">
                            <i className="fa fa-medium fa-4x text-secondary ml-4 my-icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;