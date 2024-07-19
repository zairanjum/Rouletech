import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Styling/Skills.css';

const skills = {
  frontend: [
    { title: "JavaScript", description: "Proficient in building dynamic and interactive web applications." },
    { title: "ReactJS", description: "Experienced in building user interfaces with React, including hooks and state management." },
    { title: "HTML & CSS", description: "Strong foundation in HTML and CSS for structuring and styling web pages." },
    { title: "UI/UX", description: "Knowledge of user interface and user experience design principles." },
    { title: "Bootstrap", description: "Experience with Bootstrap for responsive design." },
    { title: "Tailwind CSS", description: "Skilled in Tailwind CSS for utility-first CSS framework." },
    { title: "Material UI", description: "Experienced in using Material UI for building React components with Material Design." },
    { title: "Next.js", description: "Proficient in building server-side rendered React applications with Next.js." },
    { title: "Redux", description: "Experienced in state management using Redux." }
  ],
  backend: [
    { title: "Node.js", description: "Skilled in building server-side applications with Node.js." },
    { title: "ExpressJS", description: "Experienced in building RESTful APIs with Express.js." },
    { title: "JWT", description: "Knowledge of implementing JSON Web Tokens for secure authentication." },
    { title: "RESTful APIs", description: "Proficient in designing and implementing RESTful APIs." }
  ],
};

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function SkillSection({ category, skills }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`skill-section ${inView ? 'fade-in' : ''}`}>
      <h3 className="section-title">{category}</h3>
      <div className="features">
        {skills.map(skill => (
          <FeatureCard key={skill.title} title={skill.title} description={skill.description} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-header">My Skills</h2>
      <SkillSection category="Frontend" skills={skills.frontend} />
      <SkillSection category="Backend" skills={skills.backend} />
    </div>
  );
}

export default Skills;
