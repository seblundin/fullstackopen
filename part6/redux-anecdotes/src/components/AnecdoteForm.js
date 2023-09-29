import { useDispatch } from "react-redux";
import { createAction } from "../reducers/anecdoteReducer";

const CreateAnecdotes = () => {
  const dispatch = useDispatch();

  const createNote = (event) => {
    event.preventDefault();
    dispatch(createAction(event.target.anecdote.value));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={createNote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default CreateAnecdotes;

