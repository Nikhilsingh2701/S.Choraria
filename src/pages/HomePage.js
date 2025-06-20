// File: src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

// 1. IMPORT SWIPER COMPONENTS AND MODULES
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// 2. IMPORT SWIPER STYLES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// --- Data (remains the same) ---
const teamMembers = [
  { img: '/images/santosh.webp', name: 'CA Santosh Choraria', position: 'Managing Partner', description: 'Fellow Member of the ICAI.' },
  { img: '/images/seema.webp', name: 'CA Seema Choraria', position: 'Partner', description: 'Fellow Member of ICAI.' },
  { img: '/images/ramesh.webp', name: 'CA Ramesh Kumar Verma', position: 'Partner', description: 'Associate Member of ICAI.' },
];

const services = [
  { img: '/images/audit.webp', title: 'AUDIT & ASSURANCE SERVICES', link: '/audit' },
  { img: '/images/tax.webp', title: 'TAX & LEGAL SUPPORT SERVICES', link: '/tax' },
  { img: '/images/consult.webp', title: 'BUSINESS & CONSULTANCY SERVICES', link: '/consulting' },
  { img: '/images/bankruptcy.webp', title: 'IBC SERVICES', link: '/ibc' },
  { img: '/images/roc.webp', title: 'Company Law Matter', link: '/roc' },
  { img: '/images/nbfc.webp', title: 'RBI Compliance', link: '/nbfc' },
  { img: '/images/merge.webp', title: 'Merger SERVICES', link: '/merge' },
];

const industriesData = [
  { img: '/images/banking.webp', desc: 'Banking & Finance Sector' },
  { img: '/images/nonprofit.webp', desc: 'Non-Profit Organisation' },
  { img: '/images/printing.webp', desc: 'Printing Sector' },
  { img: '/images/textile.webp', desc: 'Textile Industries' },
  { img: '/images/realestate.webp', desc: 'Real Estate' },
  { img: '/images/money.webp', desc: 'NBFC Sector' },
  { img: '/images/food.webp', desc: 'Restaurant and Food Sector' },
];


const HomePage = () => {
  return (
    <>
      <Slideshow />
      <div className="homeDesc">
        <p>Established in 1997 and registered with The Institute of Chartered Accountants of India (Registration No. 323475), S.Choraria & Associates is a distinguished Chartered Accountants firm, dedicated to upholding the principles of the Chartered Accountants Act, 1949, and the Chartered Accountants Regulations, 1988.<br></br><br></br>

Driven by a mission to honour excellence in the field of Chartered Accountancy, the firm aspires to infuse professionalism into every aspect of its operations, drawing inspiration from professionals worldwide. <br></br><br></br>

Since its inception in 1997, the firm has evolved into a prestigious organization known for its unwavering commitment to the highest standards of professional integrity, ethics, and values.

S.Choraria & Associates has received the coveted peer review certificate from the Peer Review Board of ICAI, New Delhi.</p>
      </div>

      {/* --- TEAM SECTION (remains the same) --- */}
      <section className="team-section" style={{ marginBottom: '40px' }}>
        <h2 className="section-title">OUR TEAM</h2>
        <div className="services-underline"></div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="team-member-image" />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-position">{member.position}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION (with Swiper) --- */}
      <section className="services-section" style={{ marginBottom: '40px' }}>
        <h2 className="section-title">SERVICES</h2>
        <div className="services-underline"></div>
       <div className="swiper-container-wrapper"> 
    <Swiper
      // ... (your Swiper props remain the same)
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      navigation // This enables the default arrow elements
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
      }}
    >
      {services.map(({ img, title, link }, i) => (
        <SwiperSlide key={i}>
          <div className="service-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <Link to={link} className="read-more">Read More</Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
      </section>

     {/* --- UPDATED INDUSTRIES SECTION (with Swiper and correct wrapper) --- */}
<section className="services-section">
  <h2 className="section-title">Industries</h2>
  <div className="services-underline"></div>

  {/* 1. Add this wrapper div. It creates space for the dots below. */}
  <div className="swiper-pagination-wrapper">
    <Swiper
      // Modules to enable Pagination and Autoplay
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      // This enables the dots and makes them clickable
      pagination={{ clickable: true }}
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false 
      }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 30 },
        1200: { slidesPerView: 5, spaceBetween: 30 },
      }}
    >
      {industriesData.map(({ img, desc }, i) => (
        <SwiperSlide key={i}>
          <div className="industry-item">
            <img src={img} alt={desc} className="industry-item-image" />
            <p className="industry-item-description">{desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
    </>
  );
};

export default HomePage;