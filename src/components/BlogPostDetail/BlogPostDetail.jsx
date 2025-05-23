// src/components/BlogPostDetail.js
import React from 'react';
import styles from './BlogPostDetail.module.css';

const BlogPostDetail = ({ title, content, author, date, onBack, onEdit, onDelete }) => {
  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className={styles.blogPostDetail}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>By {author}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className={styles.actions}>
        <button className={styles.backButton} onClick={onBack}>← Back</button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </article>
  );
};

export default BlogPostDetail;
