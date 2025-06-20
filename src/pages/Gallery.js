// import React from 'react';
// import TopBar from '../components/TopBar';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
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
  { src: `${process.env.PUBLIC_URL}/images/gal13.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal14.webp`, alt: "Team Fun Day" },
  { src: `${process.env.PUBLIC_URL}/images/gal15.webp`, alt: "Team Fun Day" }
];

const Gallery = () => {
  return (
    <>

      <section className="gallery-section">
        <div className="gallery-header">
          <h1>Our Company Gallery</h1>
          <p>Explore moments, projects, and behind-the-scenes glimpses of our journey.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map(({ src, alt, title, category }, idx) => (
            <div key={idx} className="gallery-item" data-category={category}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>

      {/* Lightbox modal can be added as a component if needed */}

    </section>
    </>
  );
};

export default Gallery;