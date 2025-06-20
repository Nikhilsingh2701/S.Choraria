import React, { useState, useEffect } from 'react';

const slides = [
  '/images/audit.webp',
  '/images/banking.webp',
  '/images/consult.webp',
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;