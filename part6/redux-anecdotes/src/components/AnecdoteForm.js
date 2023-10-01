import { useDispatch } from "react-redux";
import { create } from "../reducers/anecdoteReducer";
import { update } from "../reducers/notificationReducer";

const CreateAnecdotes = () => {
  const dispatch = useDispatch();

  const createNote = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    dispatch(create(anecdote));
    dispatch(update(`You created '${anecdote}'`));
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

