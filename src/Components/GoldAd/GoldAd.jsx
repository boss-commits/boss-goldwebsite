import React from 'react';
import './GoldAd.css';

const GoldAd = () => {
  return (
    <div className="gold-ad-container">
      <div className="gold-card">
        <h1 className="title">GG Gold</h1>
        <h2 className="subtitle">Since 1990</h2>
        <h2 className="description">A Central Government Registered Trademark Company</h2>

        <div className="contact-info">
          <div className="btn-group">
            <button className="btn gold-btn">Exchange Gold for Cash</button>
          </div>
          <div className='btn-group'>
          <button className="btn whatsapp-btn">Call/Whatsapp-+91 96008 48215 || 9843247834</button>
          </div>
        </div>
      </div>

      <div className="hero-text">
        <p>GG Gold, established in 1990, specializes in exchanging gold for cash, offering competitive rates and instant payments.</p>
        <p>With a focus on transparency and customer satisfaction, GG Gold has become a trusted name in the industry.</p>
      </div>
    </div>
  );
};

export default GoldAd;
