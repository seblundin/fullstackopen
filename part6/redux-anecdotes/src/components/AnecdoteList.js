import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { update } from "../reducers/notificationReducer";

const Anecdotes = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {state.anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map(
          (anecdote) =>
            anecdote.content.toLowerCase().includes(state.filter) && (
              <div key={anecdote.id}>
                <div>{anecdote.content}</div>
                <div>
                  has {anecdote.votes}
                  <button
                    onClick={() => {
                      dispatch(vote(anecdote.id));
                      dispatch(update(`You voted '${anecdote.content}'`));
                    }}
                  >
                    vote
                  </button>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default Anecdotes;

