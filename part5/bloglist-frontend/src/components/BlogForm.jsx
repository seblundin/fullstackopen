import { useState } from 'react';

const BlogForm = ({ createBlog, currentBlogs, setBlogs, giveFeedback }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const reset = () => {
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content',
    margin: '1em 0',
  };

  return (
    <form
      style={style}
      onSubmit={async (e) => {
        e.preventDefault();
        const newBlog = await createBlog({ title, author, url });
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
  );
};

export default BlogForm;
