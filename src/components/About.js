import React from 'react';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      className: 'excellence-avatar'
    },
    {
      title: 'Innovation',
      className: 'innovation-avatar'
    },
    {
      title: 'Collaboration',
      className: 'colab-avatar'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        
<div className="values-grid">
  {values.map((value, index) => (
    <div key={index} className="value-card">
      <div className="value-avatar">
        <img
          src={`/${value.className.replace('-avatar', '')}.jpg`}
          alt={value.title}
          className="avatar-img"
        />
      </div>
      <h3 className="value-title">{value.title}</h3>
    </div>
  ))}
</div>

        <div className="mission-section">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-text">
            To empower students to express their unique identity through fashion and to transform 
            college spaces into runways of innovation, confidence, and flair.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;