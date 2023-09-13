import axios from 'axios';

const url = import.meta.env.VITE_BACKEND;

const config = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createBlog = async (blog, token) => {
  const response = await axios.post(url, blog, config(token));
  return response.data;
};

const updateBlog = async (blog, token) => {
  const response = await axios.put(`${url}/${blog.id}`, blog, config(token));
  return response.data;
};

const deleteBlog = async (id, token) => {
  const response = await axios.delete(`${url}/${id}`, config(token));
  return response.data;
};

export { getAll, createBlog, updateBlog, deleteBlog };
