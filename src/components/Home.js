import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome to Panache</h1>
            <p>
              Welcome to Panache, the official fashion club of D. J. Sanghvi College of Engineering, 
              Mumbai. We're more than just glitz and glam — we're a creative community that celebrates 
              individuality, self-expression, and bold ideas through fashion. From runway shows to 
              editorial shoots, Panache is where art meets attitude.
            </p>
          </div>
          <div className="home-logo">
            <div className="main-logo">
              <div className="logo-shine"></div>
              <img src="/logo.jpg" alt="Panache Logo" className="logo-home" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;