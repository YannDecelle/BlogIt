import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="about">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="quick-links">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="categories">
          <h3>Category</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Weekly Newsletter</h3>
          <p>Get blog articles and offers via email.</p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>MetaBlog &copy; JS Template 2023. All Rights Reserved.</p>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
