import React, { Component } from "react";
import "../styles/admin-page.css";

let URL;
let imageURL;

console.log("env: ", process.env.NODE_ENV);

if(process.env.NODE_ENV === "production"){
    URL = "https://shrouded-savannah-58703.herokuapp.com/projects";
    imageURL = "https://shrouded-savannah-58703.herokuapp.com/";
}else if(process.env.NODE_ENV === "development"){
    URL = "http://localhost:3000/projects";
    imageURL = "http://localhost:3000/";
}

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
            imageFile: '',
            newImageFile: '',
            modify: '',
            projectToModify: ''
        }
    }

    componentDidMount() {
        this.fetchProjectsInDB();
    }

    render() {
        return (
          <div id="admin_page" className="">
              <div className="container">
      
                  <form className="project-form" onSubmit={this.handleProjectFormSubmit}>
                      <div className="form-group">
                          <h1 className="text-white">Add a new project</h1>
                          <input type="text" className="form-control mb-1" id="project_title" placeholder="title" required onChange={e => this.setState({ title: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_description" placeholder="description" required onChange={e => this.setState({ description: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_tech" placeholder="technologies used" onChange={e => this.setState({ tech: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_site_link" placeholder="site url" onChange={e => this.setState({ site_link: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_code_link" placeholder="code url (github, bitbucket, etc)" onChange={e => this.setState({ code_link: e.target.value })} />
                          <input type="text" className="form-control" id="project_filters" placeholder="filters (React, Meteor, etc)" onChange={e => this.setState({ filters: e.target.value })} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="project_image" className="text-white">Upload Website Image: </label>
                          <input type="file" className="form-control-file mb-1 text-white" id="project_image" required onChange={e => this.setState({ imageFile: e.target.files[0] })} />
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
                                                <label className="text-secondary">title: </label><input type="text" className="form-control" defaultValue={this.state.title} required onChange={e => this.setState({ title: e.target.value })}/><br/>
                                                <label className="text-secondary">description: </label><input type="text" className="form-control" defaultValue={this.state.description} required onChange={e => this.setState({ description: e.target.value })}/><br/>
                                                <label className="text-secondary">tech: </label><input type="text" className="form-control" defaultValue={this.state.tech} onChange={e => this.setState({ tech: e.target.value })}/><br/>
                                                <label className="text-secondary">site link: </label><input type="text" className="form-control" defaultValue={this.state.site_link} onChange={e => this.setState({ site_link: e.target.value })}/><br/>
                                                <label className="text-secondary">code link: </label><input type="text" className="form-control" defaultValue={this.state.code_link} onChange={e => this.setState({ code_link: e.target.value })}/><br/>
                                                <label className="text-secondary">filters: </label><input type="text" className="form-control" defaultValue={this.state.filters} onChange={e => this.setState({ filters: e.target.value })}/><br/>
                                                <button type="submit" className="btn btn-success mt-3" onClick={() => this.handleProjectModifySubmit(project._id)}>Submit</button>
                                                <button className="btn btn-danger ml-2 mt-3" onClick={() => this.handleProjectModifyCancel()}>Cancel</button>
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
                                        <span className="text-secondary">title: </span><span className="text-white">{project.title}</span><br/>
                                        <span className="text-secondary">description: </span><span className="text-white">{project.description}</span><br/>
                                        <span className="text-secondary">tech: </span><span className="text-white">{project.tech}</span><br/>
                                        <span className="text-secondary">site link: </span><span className="text-white">{project.site_link}</span><br/>
                                        <span className="text-secondary">code link: </span><span className="text-white">{project.code_link}</span><br/>
                                        <span className="text-secondary">filters: </span><span className="text-white">{project.filters}</span><br/>
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
        fetch(URL).then(result => {
            return result.json();
        }).then(data => {
            this.setState({ projects: data });
        })
    }

    handleProjectFormSubmit = e => {
        e.preventDefault();
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
    
            fetch(URL, {
                method: 'post',
                mode: 'cors',
                body: formData,
            }).then((response) => {
                if(response.ok){
                    window.location.reload();
                }
            })

        });
    }

    handleProjectModify = (projectId) => {
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
                    imageFile: project.image
                })
            )
        })
    }

    handleProjectModifyCancel = () => {
        this.setState({
            modify: "",
            projectToModify: "",
            title: "",
            description: "",
            tech: "",
            site_link: "",
            code_link: "",
            filters: "",
            imageFile: ""
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
                filters: this.state.filters
            }}, () => {
                let formData = new FormData();
                formData.append('formInput', JSON.stringify(this.state.formInput));
                formData.append('image', this.state.newImageFile);
        
                fetch(URL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                }).then((response) => {
                    if(response.ok){
                        window.location.reload();
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
                filters: this.state.filters
            }}, () => {
                let formData = JSON.stringify(this.state.formInput)
        
                fetch(URL + '/' + projectId, {
                    method: 'put',
                    mode: 'cors',
                    body: formData,
                    headers: {
                        'Content-type' : "application/json"
                    }
                }).then((response) => {
                    if(response.ok){
                        window.location.reload();
                    }
                })
            });
        }
    }

    handleProjectDelete = (projectId) => {
        fetch(URL + '/' + projectId, {
            method: 'delete',
            mode: 'cors'
        }).then((response) => {
            if(response.ok){
                window.location.reload();
            }
        })
    }

};
export default AdminPage;
