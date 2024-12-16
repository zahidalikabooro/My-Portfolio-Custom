import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-gradient min-h-screen">
      <Header />
      <div className="main-content">
        {/* Welcome Heading */}
        <h1 className="welcome-heading">
          Welcome to My Portfolio
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-paragraph">
          Hello, I’m Zahid Ali. I’m a developer with skills in HTML, CSS, TypeScript, and Next.js. Welcome to my personal portfolio website where you can learn more about my work, my skills, and contact me for exciting opportunities.
        </p>

        {/* Action Buttons */}
        <div className="btn-container">
          <a
            href="/about"
            className="action-btn"
          >
            About Me
          </a>
          <a
            href="/contact"
            className="action-btn"
          >
            Contact Me
          </a>
        </div>

        {/* Intro Text */}
        <div className="intro-text">
          <p>Feel free to explore my projects and learn more about my journey as a developer.</p>
        </div>

        {/* Services Button */}
        <div className="mt-8 flex justify-center gap-6 sm:gap-8">
          <a
            href="/services"
            className="services-btn"
          >
            My Services
          </a>
        </div>
      </div>
    </div>
  );
}
