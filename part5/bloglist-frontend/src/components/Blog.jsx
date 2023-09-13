import useToggle from '../hooks/useToggle';
import { updateBlog, deleteBlog } from '../services/blogs';
import PropTypes from 'prop-types';

const Blog = ({ user, blog, blogs, setBlogs }) => {
  const [show, flip] = useToggle();

  const handleLike = async () => {
    const blogIndex = blogs.findIndex((otherBlog) => otherBlog.id === blog.id);

    if (blogIndex === -1) {
      return;
    }

    const updatedBlog = await updateBlog(
      {
        ...blogs[blogIndex],
        likes: blogs[blogIndex].likes + 1,
        user: blogs[blogIndex].user.id,
      },
      user.token
    );

    const updatedBlogList = [...blogs];
    updatedBlogList[blogIndex] = updatedBlog;

    setBlogs(updatedBlogList);
  };

  const handleDelete = async () => {
    window.confirm(`Remove blog ${blog.title} by ${blog.author}`);
    await deleteBlog(blog.id, user.token);
    setBlogs(blogs.filter((someBlog) => someBlog.id !== blog.id));
  };

  const listStyle = {
    display: show ? 'flex' : 'none',
    flexDirection: 'column',
  };

  const articleStyle = {
    border: '1px solid',
    margin: '0.5em 0',
  };

  const buttonStyle = {
    width: 'min-content',
  };

  return (
    <article style={articleStyle}>
      <p>
        {blog.title} {blog.author}
      </p>
      <button onClick={flip}>{show ? 'hide' : 'view'}</button>
      <div style={listStyle}>
        <p>{blog.url}</p>
        <div>
          likes {blog.likes} <button onClick={handleLike}>like</button>
        </div>
        {blog.user && <p>{blog.user.name}</p>}
        <button style={buttonStyle} onClick={handleDelete}>
          remove
        </button>
      </div>
    </article>
  );
};

Blog.propTypes = {
  user: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
};

export default Blog;
