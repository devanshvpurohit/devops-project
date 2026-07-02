import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    { name: 'M. Saipavan', role: 'Full Stack Developer', icon: '👨‍💻' },
    { name: 'Project Supervisor', role: 'Technical Guide', icon: '👨‍🏫' },
    { name: 'Department Head', role: 'Academic Mentor', icon: '👨‍🔬' }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', description: 'Frontend Framework' },
    { name: 'CSS3', icon: '🎨', description: 'Styling & Design' },
    { name: 'Git', icon: '📦', description: 'Version Control' },
    { name: 'GitHub', icon: '🐙', description: 'Code Hosting' },
    { name: 'DevOps', icon: '🔄', description: 'CI/CD Practices' },
    { name: 'Mock API', icon: '🔌', description: 'Data Simulation' }
  ];

  const milestones = [
    { phase: 'Planning', status: 'completed', description: 'Project requirements & design' },
    { phase: 'Development', status: 'completed', description: 'UI/UX implementation' },
    { phase: 'Testing', status: 'completed', description: 'Quality assurance' },
    { phase: 'Deployment', status: 'in-progress', description: 'Version control setup' }
  ];

  return (
    <div className="about-page fade-in">
      <div className="about-header">
        <h1>📖 About BloodCare</h1>
        <p>Frontend Web Development with DevOps Principles</p>
      </div>

      <div className="card project-overview">
        <h2>Project Overview</h2>
        <p>
          <strong>BloodCare</strong> is a frontend-only web application designed to demonstrate 
          the integration of modern web development practices with DevOps principles. Built 
          entirely with React.js, this project showcases how frontend development alone can 
          powerfully address core functionality such as displaying real-time blood inventory 
          (mock data), managing donor and recipient interfaces, and providing instant alerts 
          or responses.
        </p>
        <p>
          The project emphasizes the importance of clear design, responsive layout, and 
          user-friendly navigation while incorporating DevOps mindsets like Git for source 
          control, GitHub for collaborative versioning, and automation thinking.
        </p>
      </div>

      <div className="card project-info">
        <h2>🎓 Academic Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <strong>Student Name:</strong>
            <span>M. Saipavan</span>
          </div>
          <div className="info-item">
            <strong>Roll Number:</strong>
            <span>23951A66F7</span>
          </div>
          <div className="info-item">
            <strong>Department:</strong>
            <span>CSE (Artificial Intelligence & Machine Learning)</span>
          </div>
          <div className="info-item">
            <strong>Institution:</strong>
            <span>Institute of Aeronautical Engineering</span>
          </div>
          <div className="info-item">
            <strong>Location:</strong>
            <span>Dundigal, Hyderabad – 500 043, Telangana</span>
          </div>
          <div className="info-item">
            <strong>Project Date:</strong>
            <span>July 2025</span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col col-2">
          <div className="card">
            <h2>🎯 Objectives</h2>
            <ul className="objectives-list">
              <li>Develop a fully functional frontend web application</li>
              <li>Implement real-time blood inventory display with mock data</li>
              <li>Create intuitive donor and recipient interfaces</li>
              <li>Apply Git for robust source control</li>
              <li>Use GitHub for collaborative versioning</li>
              <li>Demonstrate DevOps mindsets in frontend development</li>
              <li>Ensure responsive and accessible design</li>
              <li>Build a future-proof, extensible architecture</li>
            </ul>
          </div>
        </div>

        <div className="col col-2">
          <div className="card">
            <h2>✨ Key Features</h2>
            <ul className="features-list">
              <li>Real-time blood availability search</li>
              <li>Donor registration system</li>
              <li>Blood request submission</li>
              <li>Interactive inventory dashboard</li>
              <li>Responsive design for all devices</li>
              <li>Clean and intuitive UI/UX</li>
              <li>Mock API integration</li>
              <li>Accessibility compliant (WCAG)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card technologies-section">
        <h2>🛠️ Technology Stack</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <h4>{tech.name}</h4>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card team-section">
        <h2>👥 Project Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-icon">{member.icon}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card milestones-section">
        <h2>📊 Project Milestones</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${milestone.status}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>{milestone.phase}</h4>
                <p>{milestone.description}</p>
                <span className={`status-badge ${milestone.status}`}>
                  {milestone.status === 'completed' ? '✓ Completed' : '⚡ In Progress'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card devops-section">
        <h2>🔄 DevOps Integration</h2>
        <div className="devops-content">
          <div className="devops-item">
            <h4>Version Control</h4>
            <p>
              Git is used for tracking all changes, enabling rollback capabilities and 
              maintaining a complete project history.
            </p>
          </div>
          <div className="devops-item">
            <h4>Collaborative Development</h4>
            <p>
              GitHub hosts the codebase, facilitating collaboration, code reviews, and 
              future CI/CD integration.
            </p>
          </div>
          <div className="devops-item">
            <h4>Automation Mindset</h4>
            <p>
              Project structure supports future automation with mock APIs simulating 
              real-time interactions.
            </p>
          </div>
          <div className="devops-item">
            <h4>Continuous Improvement</h4>
            <p>
              Modular architecture allows incremental enhancements and easy integration 
              of new features.
            </p>
          </div>
        </div>
      </div>

      <div className="card future-scope">
        <h2>🚀 Future Enhancements</h2>
        <div className="future-grid">
          <div className="future-item">
            <h4>Backend Integration</h4>
            <p>Connect with REST API and database for live data management</p>
          </div>
          <div className="future-item">
            <h4>CI/CD Pipeline</h4>
            <p>Implement GitHub Actions for automated testing and deployment</p>
          </div>
          <div className="future-item">
            <h4>AI Matching</h4>
            <p>Intelligent donor-recipient matching based on compatibility</p>
          </div>
          <div className="future-item">
            <h4>Real-time Notifications</h4>
            <p>WebSocket integration for instant updates and alerts</p>
          </div>
          <div className="future-item">
            <h4>Mobile App</h4>
            <p>Native mobile applications for iOS and Android</p>
          </div>
          <div className="future-item">
            <h4>Analytics Dashboard</h4>
            <p>Advanced metrics and reporting for blood bank management</p>
          </div>
        </div>
      </div>

      <div className="card conclusion">
        <h2>📝 Conclusion</h2>
        <p>
          BloodCare successfully demonstrates how DevOps principles can be effectively 
          applied to frontend-only web development. By leveraging Git and GitHub for version 
          control, implementing responsive design, and maintaining clean, modular code, this 
          project serves as a strong foundation for understanding modern development workflows.
        </p>
        <p>
          The application showcases that even without backend infrastructure, developers can 
          create powerful, user-friendly interfaces that address real-world problems while 
          following industry best practices. This project prepares developers for more complex 
          full-stack implementations and enterprise-level development environments.
        </p>
      </div>
    </div>
  );
};

export default About;
