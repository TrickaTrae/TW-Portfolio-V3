import React from "react";
import "../styles/animations.css"
import "../styles/projects.css";

const Projects = props => {
  return (
    <div id="projects" className="d-flex align-items-center justify-content-start pt-5 pb-5" ref={props.projRef}>
        <div className="container">

            <div className="row">
                <div className="col-12 pb-3">
                    <h1 className="text-white">Recent Projects</h1>
                </div>
                <div className="col-12 pb-4">
                    <div className="border-top border-info w-50"></div>
                </div>
            </div>

            <div className="row">
                {
                    props.projects.filter(project => project.disabled === false).map((project, key) => {
                        return (
                            <div className="col-12 col-sm-6 pt-3 pb-3 project-col" key={key}>
                                <div className="position-relative h-100 w-100 project-div">
                                    <img src={project.image} className="project-image position-absolute h-100 w-100" alt="project pic"/>
                                    <div className="position-absolute h-100 w-100 p-4 project-info-div">
                                        <div className="d-flex align-items-start justify-content-between">
                                            <h2 className="text-white">{project.title}</h2>
                                            <button className="btn btn-outline-info btn-lg learn-more-btn" type="button" onClick={() => props.setModalProject(project)} data-toggle="modal" data-target="#projectModal">
                                                <i className="fa fa-arrow-right text-white" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="border-top border-info w-50 mt-4 mb-4"></div>
                                        <h5 className="text-white project-desc">{project.description}</h5>
                                    </div>
                                </div>
                            </div>       
                        )
                    })
                }
            </div>
            
            <div className="modal fade" id="projectModal" tabIndex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content project-modal-content">
                        <img src={props.modalProject.image} className="w-100 h-25" alt="project pic"/>
                        <div className="p-3">
                            <h3 className="text-white">{props.modalProject.title}</h3>
                            <div className="border-top border-info w-50 mt-3 mb-3"></div>
                            <p className="text-white">{props.modalProject.description}</p>
                            <p className="text-white">{props.modalProject.tech}</p>
                            <div className="d-flex align-items-start justify-content-between pt-2">
                                <div>
                                    <button className="btn btn-info project-modal-button">
                                        <i className="fa fa-link" aria-hidden="true"></i><span className="ml-2">View Site</span>
                                    </button>
                                    <button className="btn btn-info project-modal-button ml-1">
                                        <i className="fa fa-code" aria-hidden="true"></i><span className="ml-2">View Code</span>
                                    </button>
                                </div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <h3 className="text-white" aria-hidden="true">&times;</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};
export default Projects;