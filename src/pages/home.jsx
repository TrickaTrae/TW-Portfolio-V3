import React, { Component } from "react";
import NavBar from "../components/navbar";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Footer from "../components/footer";
import "../styles/home.css";

let URL;
if(process.env.NODE_ENV === "production"){
    URL = "https://shrouded-savannah-58703.herokuapp.com/projects";
}else if(process.env.NODE_ENV === "development"){
    URL = "http://localhost:3000/projects";
}

class Home extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      originalProjects: [],
      animateProjects: false,
      animateFooter: false
    };
    this.projRef = React.createRef();
    this.footerRef = React.createRef();
  }

  componentDidMount() {
    this.fetchProjectsInDB();
    window.addEventListener('scroll', this.handleFooterAnimation);
  }
  
  render() {
    return (
      <div id="home">
        <NavBar />
        <Intro projRef={this.projRef} onViewWorkClick={this.handleViewWorkScroll} />
        <Projects 
          projects={this.state.projects} projRef={this.projRef} 
          onFilterClick={this.handleProjectFilter} 
          animateProjectsClick={this.handleAnimateProjects} 
          animateProjects={this.state.animateProjects} 
        />
        <Footer footerRef={this.footerRef} animateFooter={this.state.animateFooter} />
      </div>
    );
  }

  fetchProjectsInDB = () => {
    fetch(URL).then(result => {
      return result.json();
    }).then(data => {
      this.setState({ projects: data, originalProjects: data });
    })
}

  handleViewWorkScroll = () => {
    let top = this.projRef.current.offsetTop;
    let left = this.projRef.current.offsetLeft;
    window.scroll({top: top, left: left, behavior: 'smooth'});
  }

  handleProjectFilter = currentFilter => {
    if(currentFilter === "All"){
      this.setState({ projects: this.state.originalProjects });
    } else {
      const projects = this.state.originalProjects.filter(project => project.filters.includes(currentFilter));
      this.setState({ projects });
    }
  }

  handleAnimateProjects = (status) => {
    this.setState({ animateProjects: status });
  }

  handleFooterAnimation = () => {
    let bottomOfPage = window.scrollY + window.innerHeight;
    let topOfFooter = this.footerRef.current.offsetTop;
    if(bottomOfPage > topOfFooter && this.state.animateFooter === false){
      this.setState({ animateFooter: true })
    }
  }

}

export default Home;