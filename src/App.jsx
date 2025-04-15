import React, { useState } from 'react';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Getting Started with React',
      summary: 'Learn the basics of React and build your first application.',
      content: '<p>Learn the basics of React and build your first application.</p>',
      author: 'Jane Doe',
      date: '2023-01-01',
    },
    {
      id: '2',
      title: 'CSS Grid vs. Flexbox',
      summary: 'A comparison of two powerful layout systems in CSS.',
      content: '<p>A comparison of two powerful layout systems in CSS.</p>',
      author: 'John Smith',
      date: '2023-02-15',
    },
    {
      id: '3',
      title: 'Accessibility in Web Development',
      summary: 'Tips for making your web applications more accessible.',
      content: '<p>Tips for making your web applications more accessible.</p>',
      author: 'Emily Johnson',
      date: '2023-03-10',
    },
  ]);

  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [viewedPost, setViewedPost] = useState(null);

  const handleSubmit = (newPost) => {
    if (editingPost) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === editingPost.id ? { ...editingPost, ...newPost } : post
        )
      );
    } else {
      const newId = String(posts.length + 1);
      setPosts([...posts, { id: newId, ...newPost }]);
    }
    setEditingPost(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleView = (post) => {
    setViewedPost(post);
  };

  const handleBack = () => {
    setViewedPost(null);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {!viewedPost && <button onClick={handleAddNew}>Add Post</button>}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <BlogPostForm post={editingPost} onSubmit={handleSubmit} />
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {viewedPost ? (
        <div className="modal">
          <div className="modal-content">
            <h2>{viewedPost.title}</h2>
            <p><strong>By:</strong> {viewedPost.author}</p>
            <p><strong>Date:</strong> {viewedPost.date}</p>
            <div dangerouslySetInnerHTML={{ __html: viewedPost.content }} />
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      ) : (
        <BlogPostList
          posts={posts}
          onEdit={(post) => {
            setEditingPost(post);
            setShowForm(true);
          }}
          onView={handleView}
        />
      )}
    </div>
  );
};

export default App;
