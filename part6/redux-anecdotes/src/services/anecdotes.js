import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createNew = async (content) => {
  const response = await axios.post(baseUrl, asObject(content));
  return response.data;
};

export const like = async (anecdote) => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
};

