import React, { Component } from "react";
import "../styles/admin-page.css";

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
            imageFile: ''
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
                                    <button className="btn btn-warning mt-3">Modify</button>
                                    <button className="btn btn-danger ml-2 mt-3" onClick={() => this.handleProjectDelete(project._id)}>Delete</button>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-center p-2">
                                    <img className="project-image" src={"http://localhost:3000/" + project.image} alt="Card pic" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

          </div>
        );
    }

    fetchProjectsInDB = () => {
        fetch('http://localhost:3000/projects').then(result => {
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
    
            fetch('http://localhost:3000/projects', {
                method: 'post',
                mode: 'cors',
                body: formData,
            })

            window.location.reload();
        });
    }

    handleProjectDelete = (projectId) => {
        fetch('http://localhost:3000/projects/' + projectId, {
            method: 'delete',
            mode: 'cors'
        })

        window.location.reload();
    }

};
export default AdminPage;
