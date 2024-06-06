import React from 'react';
import '../styles.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <div className="post-details">
        <span>Technology</span>
        <h3>{post.title}</h3>
        <p>{post.author} - {post.date}</p>
      </div>
    </div>
  );
};

export default PostCard;
