import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import { createBlog } from '../services/blogs';

const BlogForm = ({ user, currentBlogs, setBlogs, giveFeedback }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [show, toggle, resetToggle] = useToggle(false);

  const reset = () => {
    setTitle('');
    setAuthor('');
    setUrl('');
    resetToggle();
  };

  const style = {
    display: show ? 'flex' : 'none',
    flexDirection: 'column',
    width: 'min-content',
    margin: '1em 0',
  };

  return (
    <>
      <form
        style={style}
        onSubmit={async (e) => {
          e.preventDefault();
          const newBlog = await createBlog({ title, author, url }, user.token);
          setBlogs([...currentBlogs, newBlog]);
          giveFeedback(newBlog);
          reset();
        }}
      >
        <h2>create new</h2>
        title:
        <input
          type='text'
          value={title}
          name='Title'
          onChange={({ target }) => setTitle(target.value)}
        />
        author:
        <input
          type='text'
          value={author}
          name='Author'
          onChange={({ target }) => setAuthor(target.value)}
        />
        url:
        <input
          type='text'
          value={url}
          name='Url'
          onChange={({ target }) => setUrl(target.value)}
        />
        <button type='submit'>create</button>
      </form>
      <button onClick={toggle}>{show ? 'cancel' : 'new blog'}</button>
    </>
  );
};

export default BlogForm;
