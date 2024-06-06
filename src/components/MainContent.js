import React from 'react';
import PostCard from './PostCard.js';
import AdBanner from './AdBanner';
import '../styles.css';

const MainContent = () => {
  const posts = [
    { author: 'Jason Francisco', date: 'August 20, 2022', image: 'image1.jpg', title: 'The Impact of Technology on the Workplace: How Technology is Changing' },
    // ... add all other posts similarly
  ];

  return (
    <main>
      <div className="main-post">
        <img src="main-post-image.jpg" alt="Main Post" />
        <div className="post-info">
          <span>Technology</span>
          <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
          <p>Jason Francisco - August 20, 2022</p>
        </div>
      </div>
      <AdBanner />
      <div className="post-list">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
