import { useSelector, useDispatch } from "react-redux";
import { voteAction } from "../reducers/anecdoteReducer";

const Anecdotes = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(voteAction(anecdote.id))}>
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Anecdotes;

