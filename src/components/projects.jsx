import React from "react";
import "../styles/projects.css";

const Projects = props => {
  return (
    <div id="projects" className="d-flex align-items-center justify-content-center" ref={props.projRef}>
        <div className="container p-5">
            <div className="row d-flex align-items-center justify-content-center">
                <h1 className="text-white">My Work</h1>
            </div>
            <div className="divider"></div>
            <div className="row pt-3 pb-3">
                <div className="col text-center">
                    <button className="btn btn-large btn-outline-info text-white my-btn" onClick={() => { props.onFilterClick("All"); props.animateProjectsClick(true); }}>All</button>
                </div>
                <div className="col text-center">
                    <button className="btn btn-large btn-outline-info text-white my-btn" onClick={() => { props.onFilterClick("React"); props.animateProjectsClick(true); }}>React</button>
                </div>
                <div className="col text-center">
                    <button className="btn btn-large btn-outline-info text-white my-btn" onClick={() => { props.onFilterClick("Meteor"); props.animateProjectsClick(true); }}>Meteor</button>
                </div>
                <div className="col text-center">
                    <button className="btn btn-large btn-outline-info text-white my-btn" onClick={() => { props.onFilterClick("Full-Stack"); props.animateProjectsClick(true); }}>Full Stack</button>
                </div>
            </div>

            <div className="row p-4">
                <div className="card-columns">
                    {
                        props.projects.map((project, key) => {
                            return (
                                <div className={props.animateProjects ? "card my-card scale-in-center" : "card my-card"} onAnimationEnd={() => props.animateProjectsClick(false)} key={key}>
                                    <img className="card-img-top" src={project.image} alt="Card pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-white">{project.title}</h5>
                                        <p className="card-text text-white">{project.description}</p>
                                        <p className="card-text text-white tech">{project.tech}</p>
                                        
                                        <a className={project.site_link !== "" ? "card-text view-site" : "none"} href={project.site_link}><small className="text-muted">View Site</small></a>
                                        <a className={project.code_link !== "" ? "card-text view-code" : "none"} href={project.code_link}><small className="text-muted">View Code</small></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </div>
  );
};
export default Projects;
