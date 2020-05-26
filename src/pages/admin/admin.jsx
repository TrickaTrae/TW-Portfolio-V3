import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyUser } from '../../-global-state/actions/user-actions';
import "./admin.css";

class Admin extends Component {
    constructor(){
        super();
        this.state = {
            projectsLoading: true,
            formInput: {},
            projects: [],
            title: '',
            description: '',
            tech: '',
            site_link: '',
            code_link: '',
            filters: '',
            disabled: '',
            imageFile: '',
            isLoading: false,
            newImageFile: '',
            modify: '',
            projectToModify: '',
            modifyIsLoading: false,
            fileInputKey: Date.now()
        }
    }

    componentDidMount = () => {
        this.props.verifyUser(localStorage.getItem("token"));
        this.fetchProjectsInDB();
    }

    displayProjectForm = () => {
        return (
            <div className="container-fluid pt-5 mb-5">
                <form className="project-form mt-5" onSubmit={this.handleProjectFormSubmit}>
                    <div className="form-group">
                        <h1 className="text-white">Add a new project</h1>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control mb-1 bg-dark text-white" id="project_title" placeholder="title" value={this.state.title} required onChange={e => this.setState({ title: e.target.value })} />
                                <input type="text" className="form-control mb-1 bg-dark text-white" id="project_site_link" placeholder="site url" value={this.state.site_link} onChange={e => this.setState({ site_link: e.target.value })} />
                                <input type="text" className="form-control mb-1 bg-dark text-white" id="project_code_link" placeholder="code url (github, bitbucket, etc)" value={this.state.code_link} onChange={e => this.setState({ code_link: e.target.value })} />
                                <input type="text" className="form-control mb-1 bg-dark text-white" id="project_filters" placeholder="filters (React, Meteor, etc)" value={this.state.filters} onChange={e => this.setState({ filters: e.target.value })} />
                            </div>
                            <div className="col-12 col-md-6">
                                <textarea className="form-control mb-1 h-75 bg-dark text-white" id="project_description" placeholder="description" value={this.state.description} required onChange={e => this.setState({ description: e.target.value })} />
                                <input type="text" className="form-control mb-1 bg-dark text-white" id="project_tech" placeholder="technologies used" value={this.state.tech} onChange={e => this.setState({ tech: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label htmlFor="project_image" className="text-white">Upload Website Image: </label>
                                <input type="file" className="form-control-file mb-1 text-white" id="project_image" key={this.state.fileInputKey} required onChange={e => this.setState({ imageFile: e.target.files[0] })} />
                            </div>
                            <div className="col-12 col-md-6">
                                <button type="submit" className="btn btn-success btn-lg submit-button">{this.state.isLoading ? <i className="fa fa-spinner fa-pulse"></i> : "Submit"}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    displayProjects = () => {
        return (
            <div className="container-fluid">
                {this.state.projects.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).map((project, key) => {
                    if(this.state.modify === true && this.state.projectToModify === project._id){
                        return(
                            <div className={project.disabled ? "projects border border-danger pt-3 pr-3 pl-3 pb-2" : "projects border border-success pt-3 pr-3 pl-3 pb-2"} key={key}>
                                <div className="form">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="text-white text-break">{project._id}</h2>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label className="text-secondary">Title: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.title} required onChange={e => this.setState({ title: e.target.value })}/><br/>
                                                <label className="text-secondary">Description: </label>
                                                <textarea type="text" className="form-control bg-dark text-white" value={this.state.description} required onChange={e => this.setState({ description: e.target.value })}/><br/>
                                                <label className="text-secondary">Tech: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.tech} onChange={e => this.setState({ tech: e.target.value })}/><br/>
                                                <label className="text-secondary">Filters: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.filters} onChange={e => this.setState({ filters: e.target.value })}/><br/>
                                            </div>
                                            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                                <label className="text-secondary">Site link: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.site_link} onChange={e => this.setState({ site_link: e.target.value })}/><br/>
                                                <label className="text-secondary">Code link: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.code_link} onChange={e => this.setState({ code_link: e.target.value })}/><br/>
                                                <label className="text-white">Keep current image: </label>
                                                <input type="text" className="form-control bg-dark text-white" defaultValue={this.state.imageFile}/>
                                                <p className="text-white mt-3 mb-3">- OR -</p>
                                                <label htmlFor="project_image_2" className="text-white">Upload New Image: </label>
                                                <input type="file" className="form-control-file mb-1 text-white p-auto" id="project_image_2" required onChange={e => this.setState({ newImageFile: e.target.files[0] })} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 pb-3 pt-4">
                                                <div className="border-bottom border-secondary w-100"></div>
                                            </div>
                                            <div className="col-12 col-md-4 pb-1">
                                                <button className="btn btn-danger w-100" onClick={() => this.handleProjectReset()}>Cancel</button>
                                            </div>
                                            <div className="col-12 col-md-4 pb-1">
                                                {
                                                    this.state.disabled
                                                    ? <button className="btn btn-warning w-100" onClick={() => this.setState({ disabled: false })}>Enable Project</button>
                                                    : <button className="btn btn-danger w-100" onClick={() => this.setState({ disabled: true })}>Disable Project</button>
                                                }
                                            </div>
                                            <div className="col-12 col-md-4 pb-1">
                                                <button type="submit" className="btn btn-success w-100" onClick={() => this.handleProjectModifySubmit(project._id)}>
                                                    {this.state.modifyIsLoading ? <i className="fa fa-spinner fa-pulse"></i> : "Submit"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className={project.disabled ? "projects border border-danger p-4" : "projects border border-success p-4"} key={key}>
                                <div className="row">
                                    <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
                                        <h2 className="text-white text-break text-center">{project.title}</h2>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <h2 className="text-white text-break text-center">{project._id}</h2>
                                    </div>
                                    <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
                                        {
                                            project.disabled
                                            ? <strong className="text-danger">DISABLED</strong>
                                            : <strong className="text-success">ENABLED</strong>
                                        }
                                    </div>
                                    <div className="col-12 pb-4 pt-3">
                                        <div className="border-bottom border-secondary w-100"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <span className="text-secondary">Description: </span><pre className="text-white project-desc-pre mb-0">{project.description}</pre><br/>
                                        <span className="text-secondary">Tech: </span><span className="text-white">{project.tech}</span><br/>
                                        <span className="text-secondary">Site link: </span><span className="text-white">{project.site_link}</span><br/>
                                        <span className="text-secondary">Code link: </span><span className="text-white">{project.code_link}</span><br/>
                                        <span className="text-secondary">Filters: </span><span className="text-white">{project.filters}</span><br/>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-2">
                                        <img className="project-image" src={project.image} alt="Card pic" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pb-3 pt-4">
                                        <div className="border-bottom border-secondary w-100"></div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <button className="btn btn-warning w-100" onClick={() => this.handleProjectModify(project._id)}>Modify</button>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <button className="btn btn-danger w-100" onClick={() => this.handleProjectDelete(project._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

    render() {
        return (
            <div id="admin">
                {
                    (this.props.userLoading || this.state.projectsLoading) ? "" : this.props.userLoggedIn === false ? <Redirect to="/" /> : 
                    <>
                        {this.displayProjectForm()}
                        {this.displayProjects()}
                    </>
                }
            </div>
        );
    }

    fetchProjectsInDB = () => {
        this.setState({ projectsLoading: true }, () => {
            fetch(process.env.REACT_APP_PROJECT_URL).then(result => result.json()).then(projects => {
                this.setState({ projects, projectsLoading: false });
            })
        })
    }

    handleProjectFormSubmit = e => {
        e.preventDefault();
        this.setState({ isLoading: true, formInput: {
            title: this.state.title,
            description: this.state.description,
            tech: this.state.tech,
            site_link: this.state.site_link,
            code_link: this.state.code_link,
            filters: this.state.filters
        }}, () => {
            let formData = new FormData();
            formData.append('formInput', JSON.stringify(this.state.formInput));
            formData.append('image', this.state.imageFile);
    
            fetch(process.env.REACT_APP_PROJECT_URL, {
                method: 'post',
                mode: 'cors',
                body: formData,
            }).then((response) => {
                if(response.ok){
                    this.setState({ isLoading: false });
                    this.handleProjectReset();
                    this.fetchProjectsInDB();
                }
            })
        });
    }

    handleProjectModifySubmit = projectId => {
        this.setState({ modifyIsLoading: true });
        if(this.state.newImageFile !== ""){
            // new image file uploaded
            this.setState({ formInput: {
                title: this.state.title,
                description: this.state.description,
                tech: this.state.tech,
                site_link: this.state.site_link,
                code_link: this.state.code_link,
                filters: this.state.filters,
                disabled: this.state.disabled
            }}, () => {
                let formData = new FormData();
                formData.append('formInput', JSON.stringify(this.state.formInput));
                formData.append('image', this.state.newImageFile);
        
                fetch(process.env.REACT_APP_PROJECT_URL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                }).then((response) => {
                    if(response.ok){
                        this.setState({ modifyIsLoading: false });
                        this.handleProjectReset();
                        this.fetchProjectsInDB();
                    }
                })
            });
        } else {
            // re-using old image
            this.setState({ formInput: {
                title: this.state.title,
                description: this.state.description,
                tech: this.state.tech,
                site_link: this.state.site_link,
                code_link: this.state.code_link,
                image: this.state.imageFile,
                filters: this.state.filters,
                disabled: this.state.disabled
            }}, () => {
                let formData = JSON.stringify(this.state.formInput)
        
                fetch(process.env.REACT_APP_PROJECT_URL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                    headers: {
                        'Content-type' : "application/json"
                    }
                }).then((response) => {
                    if(response.ok){
                        this.setState({ modifyIsLoading: false });
                        this.handleProjectReset();
                        this.fetchProjectsInDB();
                    }
                })
            });
        }
    }

    handleProjectDelete = projectId => {
        fetch(process.env.REACT_APP_PROJECT_URL + '/' + projectId, {
            method: 'delete',
            mode: 'cors'
        }).then((response) => {
            if(response.ok){
                this.fetchProjectsInDB();
            }
        })
    }

    handleProjectModify = projectId => {
        this.setState({
            modify: true,
            projectToModify: projectId
        })
        this.state.projects.filter(project => project._id === projectId).map(project => {
            return(
                this.setState({
                    title: project.title,
                    description: project.description,
                    tech: project.tech,
                    site_link: project.site_link,
                    code_link: project.code_link,
                    filters: project.filters,
                    disabled: project.disabled,
                    imageFile: project.image
                })
            )
        })
    }

    handleProjectReset = () => {
        this.setState({
            modify: false,
            projectToModify: "",
            title: "",
            description: "",
            tech: "",
            site_link: "",
            code_link: "",
            filters: "",
            disabled: "",
            imageFile: "",
            fileInputKey: Date.now()
        })
    }

};

const mapStateToProps = state => {
    return {
        userLoading: state.userState.userLoading,
        userLoggedIn: state.userState.userLoggedIn,
    }
}

export default connect(mapStateToProps, { verifyUser })(Admin);