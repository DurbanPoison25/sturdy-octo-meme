// BlogPostItem.jsx
import React from "react";
import styles from "./BlogPostItem.module.css";

const BlogPostItem = ({ id, title, summary, author, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={styles.blogPostItem}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>By {author}</p>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </article>
  );
};

export default BlogPostItem;
