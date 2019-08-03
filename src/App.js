import React, { Component } from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Footer from "./components/footer";
import img_SmallFriAcademy from './assets/SmallFriAcademy.png';
import img_PythonMicroservice from './assets/PythonMicroservice.png';
import img_LifeElevated from './assets/LifeElevated.png';
import img_DeveloperLevel from './assets/DeveloperLevel.png';
import img_CannaGroupHoldings from './assets/CannaGroupHoldings.png';
import img_Livayo from './assets/Livayo.png';
import img_ComCork from './assets/ComCork.png';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: "Developer Level",
          description: "Inner app for Paladin & Archer. An application for developing developers. Building new features, functionalities, and enhancements for both the front-end and back-end along with writing unit/e2e tests. Worked on through-out entire employment.",
          tech: "Meteor, JavaScript, Less, Bootstrap, Node, MongoDB, Mocha, Chai, Nightwatch, Selenium",
          site_link: "http://app.developerlevel.com",
          code_link: "https://github.com/TrickaTrae/padawan",
          image: img_DeveloperLevel,
          filters: "Meteor, Full-Stack"
        },
        {
          title: "Life Elevated",
          description: "Contract work for Catapult. Full stack website built for a trailer dealer (Life Elevated) that displays information and inventory for the business. Some features include filtering, quick search, videos, & contact form.",
          tech: "OctoberCMS, PHP, JavaScript, mySQL, Bootstrap, Sass, Composer, Laravel",
          site_link: "http://life-elevated.builtbycatapult.com/",
          code_link: "",
          image: img_LifeElevated,
          filters: "Full-Stack"
        },
        {
          title: "Python Microservice",
          description: "Challenged to build a program with technologies that were completely foreign to me, in an alloted amount of time. A microservice that pulls data from developerlevel, and displays it. I completed the challenge successfully. Not pretty, but completely functional.",
          tech: "Python, Flask, Flask-PyMongo, virtualenv",
          site_link: "",
          code_link: "https://github.com/TrickaTrae/Python-Microservice",
          image: img_PythonMicroservice,
          filters: ""
        },
        {
          title: "Community Cork",
          description: "Client project for Paladin & Archer. React wrapped in Meteor. Website was abandoned, came to Paladin & Archer to be brought back to life and finished. This is an on-going project. Features multiple forms, a web view & kiosk view, event filtering, and much more.",
          tech: "React, React Router, Meteor, Less, Bootstrap, MongoDB",
          site_link: "http://profork.local.paladinarcher.com/",
          code_link: "",
          image: img_ComCork,
          filters: "React, Meteor, Full-Stack"
        },
        {
          title: "Small Fri Academy",
          description: "Informational website designed and built for the daycare center Small Fri Academy. Business saw 50% increase in number of students enrolled, and consistently receives inquiries through implemented contact form.",
          tech: "React, React Router, Bootstrap, Formspree, Google Map API",
          site_link: "https://www.smallfriacademy.org",
          code_link: "https://github.com/TrickaTrae/Small-Fri-Academy",
          image: img_SmallFriAcademy,
          filters: "React"
        },
        {
          title: "Livayo",
          description: "Contract work for Catapult. Cool little landing page for Livayo that introduces their new software. More to come for this website.",
          tech: "OctoberCMS, JavaScript, Bootstrap, Sass, Composer, Laravel",
          site_link: "http://livayo.builtbycatapult.com/",
          code_link: "",
          image: img_Livayo,
          filters: ""
        },
        {
          title: "Canna Group Holdings",
          description: "Landing page designed and developed for Canna Group Holdings. One of the first companies in Utah allowed to represent legal medical marijuana.",
          tech: "React, React Router, Bootstrap, Formspree",
          site_link: "https://cannagroupholdings.com/",
          code_link: "https://github.com/TrickaTrae/Canna-Group-Holdings",
          image: img_CannaGroupHoldings,
          filters: "React"
        },
        // Pong/Ping Pong?
      ],
      animateProjects: false
    };
    this.originalProjects = this.state.projects;
    this.projRef = React.createRef();
  }

  handleViewWorkScroll = () => {
    let top = this.projRef.current.offsetTop;
    let left = this.projRef.current.offsetLeft;
    window.scroll({top: top, left: left, behavior: 'smooth'});
  }

  handleProjectFilter = currentFilter => {
    if(currentFilter === "All"){
      this.setState({ projects: this.originalProjects });
    } else {
      const projects = this.originalProjects.filter(project => project.filters.includes(currentFilter));
      this.setState({ projects });
    }
  }

  handleAnimateProjects = (status) => {
    this.setState({ animateProjects: status });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro projRef={this.projRef} onViewWorkClick={this.handleViewWorkScroll} />
        <Projects 
          projects={this.state.projects} projRef={this.projRef} 
          onFilterClick={this.handleProjectFilter} 
          animateProjectsClick={this.handleAnimateProjects} 
          animateProjects={this.state.animateProjects} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
