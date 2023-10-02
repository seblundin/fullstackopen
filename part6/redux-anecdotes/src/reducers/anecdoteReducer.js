import { createSlice } from "@reduxjs/toolkit";
import { createNew, getAll, like } from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      return [...state, action.payload];
    },
    vote(state, action) {
      const anecdote = state.find((a) => a.id === action.payload);
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      return state.map((a) => (a.id === anecdote.id ? updatedAnecdote : a));
    },
    setAnecdotes(_state, action) {
      return action.payload;
    },
  },
});

export const { appendAnecdote, vote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const likeAnecdote = (anecdote) => {
  return async (dispatch) => {
    const likedAnecdote = await like(anecdote);
    dispatch(vote(likedAnecdote.id));
  };
};

export default anecdoteSlice.reducer;

