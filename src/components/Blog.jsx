import React, { useState } from 'react';

const Blog = ({ blogs, increaseLike, deleteBlog, nameOfCreator }) => {
  const [visibleBlogs, setVisibleBlogs] = useState({});

  const toggleVisibility = (blogId) => {
    setVisibleBlogs((prevVisibleBlogs) => ({
      ...prevVisibleBlogs,
      [blogId]: !prevVisibleBlogs[blogId],
    }));
  };

  const blogStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <>
      {blogs.map(singleBlog => (
        <div key={singleBlog.id} style={blogStyle}>
          <div>
            <p>
              {singleBlog.title} by {singleBlog.author}
              {!visibleBlogs[singleBlog.id] ? (
                <button onClick={() => toggleVisibility(singleBlog.id)} style={{ marginLeft: '10px' }}>
                  view
                </button>
              ) : (
                <button onClick={() => toggleVisibility(singleBlog.id)} style={{ marginLeft: '10px' }}>
                  hide
                </button>
              )}
            </p>
            {visibleBlogs[singleBlog.id] && (
              <div>
                <p>{singleBlog.url}</p>
                <p>
                  Likes: {singleBlog.likes}{' '}
                  <button onClick={() => increaseLike(singleBlog)}>like</button>
                </p>
                <button onClick={() => deleteBlog(singleBlog)}>remove</button>
                {singleBlog.user && singleBlog.user.name ? (
                  <p>{singleBlog.user.name}</p>
                ) : (
                  <p>{nameOfCreator}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
