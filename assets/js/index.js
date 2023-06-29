import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Jenna Krumerman</h1>
      <div className="about-me">
        <p>about me paragraph goes here...</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-item">Skill 1</div>
        <div className="skill-item">Skill 2</div>
        <div className="skill-item">Skill 3</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
