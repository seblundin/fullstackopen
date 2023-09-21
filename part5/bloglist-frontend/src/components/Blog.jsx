import useToggle from '../hooks/useToggle';
import PropTypes from 'prop-types';

const Blog = ({ blog, user, handleLike, handleDelete }) => {
  const [show, flip] = useToggle();

  const listStyle = {
    display: show ? 'flex' : 'none',
    flexDirection: 'column',
  };

  const articleStyle = {
    border: '1px solid',
    margin: '0.5em 0',
  };

  const buttonStyle = {
    display: `${
      blog.user && blog.user.username === user.username ? 'flex' : 'none'
    }`,
    width: 'min-content',
  };

  return (
    <article style={articleStyle}>
      <p>
        {blog.title} {blog.author}
      </p>
      <button data-testid='hide-button' onClick={flip}>
        {show ? 'hide' : 'view'}
      </button>
      <div data-testid='additional-info' style={listStyle}>
        <p data-testid='url'>{blog.url}</p>
        <div data-testid='likes'>
          likes {blog.likes}
          <button data-testid='like-button' onClick={() => handleLike(blog)}>
            like
          </button>
        </div>
        {blog.user && <p data-testid='name'>{blog.user.name}</p>}
        <button
          id='remove'
          style={buttonStyle}
          onClick={() => handleDelete(blog)}
        >
          remove
        </button>
      </div>
    </article>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Blog;
