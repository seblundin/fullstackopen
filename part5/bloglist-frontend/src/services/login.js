import axios from 'axios';

const login = async (username, password) => {
  const response = await axios.post(import.meta.env.VITE_LOGIN, {
    username,
    password,
  });
  return response.data;
};

export default login;
