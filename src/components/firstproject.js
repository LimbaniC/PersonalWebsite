import React from 'react';
import './Example.css';

const Firstproject = () => {
  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1 className="blog-title">Title of the Blog Post</h1>
        <p className="blog-date">Date: May 21, 2024</p>
      </header>
      <article className="blog-content">
        <div className="blog-image-container">
          <img src="path/to/your/image.jpg" alt="Image goes here" className="blog-image" />
        </div>
        <p>Content of the blog post goes here.</p>
        <p>More content...</p>
      </article>
    </div>
  );
}

export default Firstproject;
