import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import { getAll, updateBlog, createBlog, deleteBlog } from './services/blogs';
import Login from './components/Login';
import login from './services/login';
import BlogForm from './components/BlogForm';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const prevSession = window.localStorage.getItem('user');
    if (prevSession) {
      const oldUser = JSON.parse(prevSession);
      setUser(oldUser);
    }
    (async () => {
      const allBlogs = await getAll();
      updateBlogs(allBlogs);
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
      setFeedbackMessage('');
    }, 5000);
  }, [feedbackMessage, errorMessage]);

  const giveFeedback = (blogData) => {
    setFeedbackMessage(
      `A new blog ${blogData.title} by ${blogData.author} has been added`
    );
  };

  const handleLike = async (blog) => {
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

    updateBlogs(updatedBlogList);
  };

  const handleDelete = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await deleteBlog(blog.id, user.token);
      updateBlogs(blogs.filter((someBlog) => someBlog.id !== blog.id));
    }
  };

  const submitBlog = async (blog) => {
    const { title, author, url } = blog;
    if (title && author && url) {
      const newBlog = await createBlog(blog, user.token);
      updateBlogs([...blogs, newBlog]);
      giveFeedback(newBlog);
      return true;
    } else {
      setErrorMessage('No fields should be left empty in the blog form');
      return false;
    }
  };

  const updateBlogs = (blogs) => {
    setBlogs(blogs.toSorted((first, second) => second.likes - first.likes));
  };

  const loginHandler = async ({ username, password }) => {
    try {
      const credentials = await login(username, password);
      setUser(credentials);
      window.localStorage.setItem('user', JSON.stringify(credentials));
      setUsername('');
      setPassword('');
    } catch (error) {
      setErrorMessage('Wrong username or password');
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(undefined);
  };

  const warningStyle = {
    border: '1px solid',
    padding: '1em',
    color: 'red',
  };

  const feedbackStyle = {
    ...warningStyle,
    color: 'green',
  };

  return (
    <div>
      {!user && (
        <>
          <h2>Log into application</h2>
          {errorMessage && <p style={warningStyle}>{errorMessage}</p>}
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            submit={loginHandler}
          />
        </>
      )}
      {user && (
        <>
          <h2>blogs</h2>
          {feedbackMessage && <p style={feedbackStyle}>{feedbackMessage}</p>}
          {user.name} logged in<button onClick={logout}>logout</button>
          <br></br>
          {errorMessage && <p style={warningStyle}>{errorMessage}</p>}
          <BlogForm submitBlog={submitBlog} />
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              user={user}
              blog={blog}
              setBlogs={updateBlogs}
              handleLike={handleLike}
              handleDelete={handleDelete}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
