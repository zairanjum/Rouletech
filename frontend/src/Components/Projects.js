import React, { Component } from 'react';
import './Styling/Projects.css'; // Import the CSS file for styling

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Simulating API call
    setTimeout(() => {
      this.setState({
        projects: [
          {
            title: 'PetMeUp',
            description: 'A web application for pet owners to find mating partners and consult with veterinarians.',
          },
          {
            title: 'Trading Admin Dashboard',
            description: 'A web application for real-time trading data using Material-UI and Redux.',
          },
          {
            title: 'Trading Alerts System',
            description: 'A backend system for sending email alerts based on trading account conditions.',
          },
          {
            title: 'Prop Funding Web Application',
            description: 'A full-stack application for funding management, integrating Authorize.Net for payments.',
          },
          {
            title: 'Freelance Gig Platform',
            description: 'A MERN stack application for clients to post gigs and freelancers to apply, using Stripe for payments.',
          },
          {
            title: 'LawFirm',
            description: 'A website for a law firm designed with HTML, CSS, Bootstrap, and JavaScript.',
          },
        ],
        loading: false,
      });
    }, 1000);
  }

  render() {
    const { projects, loading } = this.state;
    return (
      <div className="projects">
        <h2>My Projects</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={index} className={`project-card ${index % 2 === 0 ? 'pop-in-left' : 'pop-in-right'}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Projects;
