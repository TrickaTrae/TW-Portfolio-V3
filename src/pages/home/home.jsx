import React from 'react';
import './home.css'

const Home = () => {
    return (
      <div id="home" className="d-flex align-items-center justify-content-start">
          <div className="container fade-in-fwd">
              <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                  <div className="col-12">
                      <h1 className="text-secondary display-2">
                          Hello.
                      </h1>
                      <h1 className="text-secondary display-1">
                          I'm <span className="text-white">Traeger Winn</span>, aka <span className="text-white">Trae</span>.
                      </h1>
                  </div>
                  <div className="col-12">
                      <h1 className="text-secondary diplay-4">
                          I'm a <span className="text-white">Web Developer</span>,
                          a <span className="text-white">Problem Solver</span>,
                          a <span className="text-white">Rational Thinker</span>,
                          and a <span className="text-white">DIY Enthusiast</span>.
                      </h1>
                  </div>
              </div>  
          </div>
      </div>
    );
};
export default Home;