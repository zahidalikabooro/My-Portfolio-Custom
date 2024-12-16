import React from 'react';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="contact-bg">
      <Header />
      <div className="contact-content">
        <h1 className="contact-heading">
          About Us
        </h1>
        <p className="contact-paragraph">
          I graduated with a degree in Muslim History, and I’ve always been passionate about technology. I have developed skills in web development, including HTML, CSS, TypeScript, and Next.js. My goal is to create impactful and user-friendly websites.
        </p>
        <div className="btn-container">
          <a
            href="/"
            className="contact-btn"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="contact-btn"
          >
            Go to Contact
          </a>
        </div>
      </div>
    </div>
  );
}
