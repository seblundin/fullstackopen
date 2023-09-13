import { useState } from 'react';
import useToggle from '../hooks/useToggle';

const BlogForm = ({ submitBlog }) => {
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
          if (await submitBlog({ title, author, url })) {
            reset();
          }
        }}
      >
        <h2>create new</h2>
        title:
        <input
          data-testid='title-input'
          type='text'
          value={title}
          name='Title'
          onChange={({ target }) => setTitle(target.value)}
        />
        author:
        <input
          data-testid='author-input'
          type='text'
          value={author}
          name='Author'
          onChange={({ target }) => setAuthor(target.value)}
        />
        url:
        <input
          data-testid='url-input'
          type='text'
          value={url}
          name='Url'
          onChange={({ target }) => setUrl(target.value)}
        />
        <button data-testid='submit-button' type='submit'>
          create
        </button>
      </form>
      <button onClick={toggle}>{show ? 'cancel' : 'new blog'}</button>
    </>
  );
};

export default BlogForm;
