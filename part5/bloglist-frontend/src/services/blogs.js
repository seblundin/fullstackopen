import axios from 'axios';

let token;

const getAll = async () => {
  const response = await axios.get(import.meta.env.VITE_BACKEND);
  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(import.meta.env.VITE_BACKEND, blog, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const setToken = (newToken) => (token = newToken);

export { getAll, createBlog, setToken };
