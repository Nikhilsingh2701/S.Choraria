import React, { useState } from 'react';

const galleryItems = [
  { src: `${process.env.PUBLIC_URL}/images/gal1.webp`, alt: "Company Annual Meetup" },
  { src: `${process.env.PUBLIC_URL}/images/gal2.webp`, alt: "Project Alpha Completion" },
  { src: `${process.env.PUBLIC_URL}/images/gal3.webp`, alt: "Our Modern Office Space" },
  { src: `${process.env.PUBLIC_URL}/images/gal4.webp`, alt: "Our Dynamic Team" },
  { src: `${process.env.PUBLIC_URL}/images/gal5.webp`, alt: "Industry Seminar" },
  { src: `${process.env.PUBLIC_URL}/images/gal6.webp`, alt: "Project Beta Launch" },
  { src: `${process.env.PUBLIC_URL}/images/gal7.webp`, alt: "Meeting Room Setup" },
  { src: `${process.env.PUBLIC_URL}/images/gal8.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal9.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal10.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal11.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal12.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal14.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal15.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal16.jpg`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal17.jpg`, alt: "Team Fun Day" },
];

const Gallery = () => {
  

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleClick = (item) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const handlePrev = () => {
    const currentIndex = galleryItems.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImage(galleryItems[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = galleryItems.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentImage(galleryItems[nextIndex]);
  };

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-header">
          <h1>Our Company Gallery</h1>
          <p>Explore moments, projects, and behind-the-scenes glimpses of our journey.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="gallery-item" data-category={item.category}>
              <img src={item.src} alt={item.alt} onClick={() => handleClick(item)} />
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={handleClose}>&times;</span>
            <img src={currentImage.src} alt={currentImage.alt} className="lightbox-image" />
            <div className="lightbox-caption">{currentImage.title}</div>
            <button className="lightbox-prev lightbox-nav" onClick={handlePrev}>&#8249;</button>
            <button className="lightbox-next lightbox-nav" onClick={handleNext}>&#8250;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;