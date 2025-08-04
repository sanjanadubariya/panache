import React, { useState, useEffect } from 'react';
import '../styles/Shoots.css';

const Shoots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
  { title: ' 1', image: 'https://res.cloudinary.com/dkn62umkj/image/upload/v1753961237/IMG_9269_xlfvp4.jpg' },
  { title: '2t', image: 'https://res.cloudinary.com/dkn62umkj/image/upload/v1753961237/IMG_9255_e5tijj.jpg' },
  { title: '3', image: 'https://res.cloudinary.com/dkn62umkj/image/upload/v1753961238/IMG_9312_pl0u5d.jpg' },
  { title: 'n', image: '/shoot4.jpg' },
  { title: '5t', image: '/shoot2.jpg' },
  { title: '6', image: '/shoot3.jpg' },
  { title: '7', image: '/shoot4.jpg' },
  { title: '8', image: '/shoot4.jpg' }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="shoots" className="shoots-section">
      <div className="shoots-container">
        <h2 className="shoots-title">Shoots</h2>
      <div className="shoots-slider">
  {slides.map((slide, index) => {
    let position = '';
    if (index === currentSlide) position = 'center';
    else if (index === (currentSlide + 1) % slides.length) position = 'right';
    else if (index === (currentSlide - 1 + slides.length) % slides.length) position = 'left';
    // else position = 'hidden';

    return (
      <div
        key={index}
        className={`slide ${position}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="slide-content">
          <h3>{slide.title}</h3>
        </div>
      </div>
    );
  })}
</div>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shoots;