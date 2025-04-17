// BlogPostItem.jsx
import React from "react";
import styles from "./BlogPostItem.module.css";
import DeleteButton from "../DeletePost/DeleteButton";

const BlogPostItem = ({ id, title, summary, author, date, onEdit, onView, onDelete }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const post = { id, title, summary, author, date };

  return (
    <article className={styles.blogPostItem}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>By {author}</p>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div className={styles.buttonGroup}>
        {onView && (
          <button className={styles.viewButton} onClick={() => onView(post)}>View</button>
        )}
        {onEdit && (
          <button className={styles.editButton} onClick={() => onEdit(post)}>Edit</button>
        )}
        {onDelete && (
          <DeleteButton onClick={() => onDelete(post)} />
        )}
      </div>
    </article>
  );
};

export default BlogPostItem;
