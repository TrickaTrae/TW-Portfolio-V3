import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles/admin-page.css";

const projectURL = process.env.REACT_APP_PROJECT_URL;
const imageURL = process.env.REACT_APP_IMAGE_URL;
const verifyURL = process.env.REACT_APP_VERIFYUSERSESSION_URL;
const signoutURL = process.env.REACT_APP_SIGNOUT_URL;

class AdminPage extends Component {
    constructor(){
        super();
        this.state = {
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
            newImageFile: '',
            modify: '',
            projectToModify: '',
            fileInputKey: Date.now()
        }
    }

    componentDidMount() {
        this.fetchProjectsInDB();
    }

    render() {
        return (
          <div id="admin_page">
              <div className="container">

                  <Link to="/"><button className="btn btn-info mb-2 ml-1">home</button></Link>
                  <button onClick={() => this.handleSignOut()} className="btn btn-info mb-2 ml-1">sign-out</button>
                  <form className="project-form" onSubmit={this.handleProjectFormSubmit}>
                      <div className="form-group">
                          <h1 className="text-white">Add a new project</h1>
                          <input type="text" className="form-control mb-1" id="project_title" placeholder="title" value={this.state.title} required onChange={e => this.setState({ title: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_description" placeholder="description" value={this.state.description} required onChange={e => this.setState({ description: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_tech" placeholder="technologies used" value={this.state.tech} onChange={e => this.setState({ tech: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_site_link" placeholder="site url" value={this.state.site_link} onChange={e => this.setState({ site_link: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_code_link" placeholder="code url (github, bitbucket, etc)" value={this.state.code_link} onChange={e => this.setState({ code_link: e.target.value })} />
                          <input type="text" className="form-control" id="project_filters" placeholder="filters (React, Meteor, etc)" value={this.state.filters} onChange={e => this.setState({ filters: e.target.value })} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="project_image" className="text-white">Upload Website Image: </label>
                          <input type="file" className="form-control-file mb-1 text-white" id="project_image" key={this.state.fileInputKey} required onChange={e => this.setState({ imageFile: e.target.files[0] })} />
                      </div>
                      <button type="submit" className="btn btn-success btn-lg submit-button">Submit</button>
                  </form>
      
              </div>

            <div className="container">
                {this.state.projects.map((project, key) => {
                    if(this.state.modify === true && this.state.projectToModify === project._id){
                        return(
                            <div className="projects" key={key}>
                                <div className="form">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-6">
                                                <h2 className="text-white">{project._id}</h2>
                                                <label className="text-secondary">Title: </label><input type="text" className="form-control" defaultValue={this.state.title} required onChange={e => this.setState({ title: e.target.value })}/><br/>
                                                <label className="text-secondary">Description: </label><input type="text" className="form-control" defaultValue={this.state.description} required onChange={e => this.setState({ description: e.target.value })}/><br/>
                                                <label className="text-secondary">Tech: </label><input type="text" className="form-control" defaultValue={this.state.tech} onChange={e => this.setState({ tech: e.target.value })}/><br/>
                                                <label className="text-secondary">Site link: </label><input type="text" className="form-control" defaultValue={this.state.site_link} onChange={e => this.setState({ site_link: e.target.value })}/><br/>
                                                <label className="text-secondary">Code link: </label><input type="text" className="form-control" defaultValue={this.state.code_link} onChange={e => this.setState({ code_link: e.target.value })}/><br/>
                                                <label className="text-secondary">Filters: </label><input type="text" className="form-control" defaultValue={this.state.filters} onChange={e => this.setState({ filters: e.target.value })}/><br/>
                                                {this.state.disabled ? <button className="btn btn-warning mt-3" onClick={() => this.setState({ disabled: false })}>Enable Project</button> : <button className="btn btn-danger mt-3" onClick={() => this.setState({ disabled: true })}>Disable Project</button>}
                                                <button type="submit" className="btn btn-success ml-2 mt-3" onClick={() => this.handleProjectModifySubmit(project._id)}>Submit</button>
                                                <button className="btn btn-danger ml-2 mt-3" onClick={() => this.handleProjectReset()}>Cancel</button>
                                            </div>
                                            <div className="col-6 d-flex flex-column justify-content-center p-2">
                                                <label className="text-white">Keep current image: </label>
                                                <input type="text" className="form-control" defaultValue={this.state.imageFile}/>
                                                <p className="text-white mt-3 mb-3">- OR -</p>
                                                <label htmlFor="project_image_2" className="text-white">Upload New Image: </label>
                                                <input type="file" className="form-control-file mb-1 text-white p-auto" id="project_image_2" required onChange={e => this.setState({ newImageFile: e.target.files[0] })} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className="projects" key={key}>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="text-white">{project._id}</h2>
                                        <span className="text-secondary">Title: </span><span className="text-white">{project.title}</span><br/>
                                        <span className="text-secondary">Description: </span><span className="text-white">{project.description}</span><br/>
                                        <span className="text-secondary">Tech: </span><span className="text-white">{project.tech}</span><br/>
                                        <span className="text-secondary">Site link: </span><span className="text-white">{project.site_link}</span><br/>
                                        <span className="text-secondary">Code link: </span><span className="text-white">{project.code_link}</span><br/>
                                        <span className="text-secondary">Filters: </span><span className="text-white">{project.filters}</span><br/>
                                        {project.disabled ? <span className="text-danger">This project is disabled</span> : <span className="text-success">This project is enabled</span>}<br/>
                                        <button className="btn btn-warning mt-3" onClick={() => this.handleProjectModify(project._id)}>Modify</button>
                                        <button className="btn btn-danger ml-2 mt-3" onClick={() => this.handleProjectDelete(project._id)}>Delete</button>
                                    </div>
                                    <div className="col-6 d-flex align-items-center justify-content-center p-2">
                                        <img className="project-image" src={imageURL + project.image} alt="Card pic" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

          </div>
        );
    }

    fetchProjectsInDB = () => {
        fetch(projectURL).then(result => {
            return result.json();
        }).then(data => {
            this.setState({ projects: data });
        })
    }

    handleProjectFormSubmit = e => {
        e.preventDefault();
        fetch(verifyURL + localStorage.getItem("token")).then(result => {
            if(result.ok && result.status === 200){
                this.setState({ formInput: {
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
            
                    fetch(projectURL, {
                        method: 'post',
                        mode: 'cors',
                        body: formData,
                    }).then((response) => {
                        if(response.ok){
                            this.handleProjectReset();
                            this.fetchProjectsInDB();
                        }
                    })
                });
            } else {
                alert("You are not authorized to be on this page.");
                localStorage.clear();
                this.props.history.push('/');
            }
        })
    }

    handleProjectModifySubmit = (projectId) => {
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
        
                fetch(projectURL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                }).then((response) => {
                    if(response.ok){
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
        
                fetch(projectURL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                    headers: {
                        'Content-type' : "application/json"
                    }
                }).then((response) => {
                    if(response.ok){
                        this.handleProjectReset();
                        this.fetchProjectsInDB();
                    }
                })
            });
        }
    }

    handleProjectDelete = (projectId) => {
        fetch(verifyURL + localStorage.getItem("token")).then(result => {
            if(result.ok && result.status === 200){
                fetch(projectURL + '/' + projectId, {
                    method: 'delete',
                    mode: 'cors'
                }).then((response) => {
                    if(response.ok){
                        this.fetchProjectsInDB();
                    }
                })
            }else {
                alert("You are not authorized to be on this page.");
                localStorage.clear();
                this.props.history.push('/');
            }
        })
    }

    handleProjectModify = (projectId) => {
        fetch(verifyURL + localStorage.getItem("token")).then(result => {
            if(result.ok && result.status === 200){
                this.setState({
                    modify: true,
                    projectToModify: projectId
                })
                this.state.projects.filter(project => project._id === projectId).map( project => {
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
            }else {
                alert("You are not authorized to be on this page.");
                localStorage.clear();
                this.props.history.push('/');
            }
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

    handleSignOut = () => {
        fetch(verifyURL + localStorage.getItem("token")).then(result => {
            if(result.ok && result.status === 200){
                fetch(signoutURL + localStorage.getItem("token")).then(response => {
                    if(response.ok){
                        alert("Successfully signed out!");
                        localStorage.clear();
                        this.props.history.push('/');
                    } else {
                        response.json().then(json => {
                            alert(JSON.stringify(json));
                        })
                    }
                })
            }else {
                alert("You are not authorized to be on this page.");
                localStorage.clear();
                this.props.history.push('/');
            }
        })
    }

};
export default AdminPage;
