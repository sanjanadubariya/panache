import React from 'react';
import '../styles/Team.css';

const faculty = [
  {
    name: 'Dr. Kavita Mehra',
    role: 'Faculty Advisor',
    description: 'Guides the team with academic and industry expertise.',
    avatar: '👩‍🏫',
    linkedin: 'https://linkedin.com/in/kavita-mehra',
    email: 'kavita.mehra@djsce.ac.in'
  },
  {
    name: 'Dr. Kavita Mehra',
    role: 'Faculty Advisor',
    description: 'Guides the team with academic and industry expertise.',
    avatar: '👩‍🏫',
    linkedin: 'https://linkedin.com/in/kavita-mehra',
    email: 'kavita.mehra@djsce.ac.in'
  },
];

const core = [
  {
    name: 'Sarah Johnson',
    role: 'President',
    description: 'Fashion design student passionate about sustainable fashion and creative leadership.',
    avatar: '👨‍💼',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
    email: 'sarah.johnson@djsce.ac.in'
  },
  {
    name: 'Alex Chen',
    role: 'Vice President',
    description: 'Creative director with expertise in photography and visual storytelling.',
    avatar: '👩‍💻',
    linkedin: 'https://linkedin.com/in/alex-chen',
    email: 'alex.chen@djsce.ac.in'
  }
];
const designer= [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    description: 'Innovative designer specializing in contemporary fashion and digital art.',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Rahul Sharma',
    role: 'Events Manager',
    description: 'Event planning specialist with a passion for creating memorable fashion experiences.',
    avatar: '👩‍🎓',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];
const marketing = [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    description: 'Innovative designer specializing in contemporary fashion and digital art.',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Rahul Sharma',
    role: 'Events Manager',
    description: 'Event planning specialist with a passion for creating memorable fashion experiences.',
    avatar: '👩‍🎓',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];
const content= [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    description: 'Innovative designer specializing in contemporary fashion and digital art.',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Rahul Sharma',
    role: 'Events Manager',
    description: 'Event planning specialist with a passion for creating memorable fashion experiences.',
    avatar: '👩‍🎓',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];
const creatives = [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    description: 'Innovative designer specializing in contemporary fashion and digital art.',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Sanjana Dubariya',
    role: 'HOD Creative',
    avatar:"https://res.cloudinary.com/dkn62umkj/image/upload/v1753954320/Sanjana_Dubariya_naw9sa.jpg",
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];

const publicity = [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    description: 'Innovative designer specializing in contemporary fashion and digital art.',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Rahul Sharma',
    role: 'Events Manager',
    description: 'Event planning specialist with a passion for creating memorable fashion experiences.',
    avatar: '👩‍🎓',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];
const events= [
  {
    name: 'Maya Patel',
    role: 'Creative Director',
    avatar: '👨‍🎨',
    linkedin: 'https://linkedin.com/in/maya-patel',
    email: 'maya.patel@djsce.ac.in'
  },
  {
    name: 'Rahul Sharma',
    role: 'Events Manager',
    description: 'Event planning specialist with a passion for creating memorable fashion experiences.',
    avatar: '👩‍🎓',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
    email: 'rahul.sharma@djsce.ac.in'
  },
  {
    name: 'Arjun Gupta',
    role: 'Technical Coordinator',
    description: 'Technology enthusiast bridging the gap between fashion and digital innovation.',
    avatar: '👩‍💼',
    linkedin: 'https://linkedin.com/in/arjun-gupta',
    email: 'arjun.gupta@djsce.ac.in'
  }
];
// const convertDriveLink = (url) => {
//   const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
//   if (match && match[1]) {
//     return `https://drive.google.com/uc?export=view&id=${match[1]}`;
//   }
//   return url;
// };

const renderTeamSection = (title, members) => (
  <div>
    <h2 className="team-title" style={{ fontSize: '2rem', marginTop: '2rem' }}>{title}</h2>
    <div className="team-grid">
      {members.map((member, index) => (
        <div key={index} className="team-card">
              <img 
                src={member.avatar}
                alt={member.name} 
                className="avatar-img" 
              />    
          <h3 className="team-name">{member.name}</h3>
          <p className="team-role">{member.role}</p>
          <div className="team-links">
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="team-link linkedin"
            >
              <span className="link-icon">💼</span>
            </a>
            <a 
              href={`mailto:${member.email}`}
              className="team-link email"
            >
              <span className="link-icon">✉️</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Team = () => (
  <div className="team-page">
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <p className="team-subtitle">Meet the creative minds behind PANACHE</p>
      {renderTeamSection('Faculty Co-ordinators', faculty)}
      {renderTeamSection('Core', core)}
      {renderTeamSection('Designing & Modeling', designer)}
      {renderTeamSection('Content Creation', content)}
      {renderTeamSection('Marketing', marketing)}
      {renderTeamSection('Publicity', publicity)}
      {renderTeamSection('Creatives', creatives)}
      {renderTeamSection('Events', events)}
    </div>
  </div>
);

export default Team;