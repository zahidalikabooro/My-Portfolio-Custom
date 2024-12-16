import React from 'react';
import Header from '@/components/Header';

export default function Contact() {
  return (
    <div className="contact-bg">
      <Header />
      <div className="contact-content">
        <h1 className="contact-heading">
          Contact Us
        </h1>

        {/* Email Contact */}
        <p className="contact-paragraph">
          You can reach me via email at:{' '}
          <a href="mailto:kaboorozahidali3@gmail.com" className="contact-link">
            kaboorozahidali3@gmail.com
          </a>
        </p>

        {/* Phone Contact */}
        <p className="contact-paragraph">
          Or, feel free to call me at:{' '}
          <a href="tel:+923110898690" className="contact-link">
            0311-0898690
          </a>
        </p>

        {/* Action Buttons */}
        <div className="btn-container">
          <a
            href="/about"
            className="contact-btn"
          >
            Go to About
          </a>
          <a
            href="/"
            className="contact-btn"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
