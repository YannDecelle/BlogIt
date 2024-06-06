import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MetaBlog</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Single Post</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;