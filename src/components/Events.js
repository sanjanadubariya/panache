import React, { useState, useEffect } from 'react';
import '../styles/Events.css';

const Events = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const heroSlides = [
    {
      title: 'Fashion Week 2024',
      Image: 'https://res.cloudinary.com/dkn62umkj/image/upload/v1753954345/IMG_0517_dekky5.heic'
    },
    {
      title: 'Annual Runway Show',
      Image: 'https://via.placeholder.com/1920x800/ff9a9e/fff?text=Annual+Runway+Show'
    },
    {
      title: 'Sustainable Fashion Summit',
      Image: 'https://via.placeholder.com/1920x800/a1c4fd/fff?text=Sustainable+Fashion+Summit'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Kshitij 2025',
      preview:
        'Join us for an intensive three-day summit focusing on sustainable practices, circular economy, and eco-friendly innovations in fashion.',
      fullDescription: `Join us for an intensive three-day summit focusing on sustainable practices, circular economy, and eco-friendly innovations in fashion. This comprehensive event will feature panel discussions, hands-on workshops, and exhibitions from green startups.`,
      Image: 'https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?pid=Api&P=0&h=180',
      date: 'March 15-17, 2024',
      location: 'DJSCE Campus, Mumbai'
    },
    {
      id: 2,
      title: 'Nagindas Khandwala College',
      preview:
        'Experience the biggest fashion event of the year with top designers, models, and fashion enthusiasts from across the city.',
      fullDescription: `Experience the biggest fashion event of the year with top designers, models, and fashion enthusiasts from across the city. This spectacular week-long celebration includes runway shows, panel discussions, and live styling sessions.`,
      Image: 'https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?pid=Api&P=0&h=180',
      date: 'April 8-14, 2024',
      location: 'Multiple venues across Mumbai'
    },
    {
      id: 3,
      title: 'Surge 2025',
      preview:
        'Learn from industry experts in our hands-on design workshop covering everything from sketching to final production.',
      fullDescription: `Learn from industry experts in our hands-on design workshop covering everything from sketching to final production. Perfect for aspiring designers and fashion enthusiasts looking to enhance their skills.`,
      Image: 'https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?pid=Api&P=0&h=180',
      date: 'February 20-22, 2024',
      location: 'PANACHE Design Studio'
    },
    {
      id: 4,
      title: 'Rhythm 2025',
      preview:
        'Learn from industry experts in our hands-on design workshop covering everything from sketching to final production.',
      fullDescription: `Learn from industry experts in our hands-on design workshop covering everything from sketching to final production. Perfect for aspiring designers and fashion enthusiasts looking to enhance their skills.`,
      Image: 'https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?pid=Api&P=0&h=180',
      date: 'February 20-22, 2024',
      location: 'PANACHE Design Studio'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const openModal = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="events-page">
      <div className="events-container">
        <h1 className="events-title">Events</h1>
        <div className="events-hero">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentHeroSlide ? 'active' : ''}`}>
              <img src={slide.Image} alt={slide.title} className="hero-image" />
              <div className="hero-content">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card" onClick={() => openModal(event.id)}>
              <h3>{event.title}</h3>
              <p>{event.preview}</p>
              <img src={event.Image} alt={event.title} className="event-image" />
              <button className="event-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedEvent.title}</h2>
            <div className="event-details">
              <p>
                <strong>Date:</strong> {selectedEvent.date}
              </p>
              <p>
                <strong>Location:</strong> {selectedEvent.location}
              </p>
              <div className="event-description">
                <img src={selectedEvent.Image} alt={selectedEvent.title} className="event-image" />
                <div style={{ marginLeft: '1rem' }}>
                  {selectedEvent.fullDescription.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
