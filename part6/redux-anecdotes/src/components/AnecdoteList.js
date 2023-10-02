import { useSelector, useDispatch } from "react-redux";
import { likeAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

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
                      dispatch(likeAnecdote(anecdote));
                      dispatch(
                        setNotification(`You voted '${anecdote.content}'`, 5)
                      );
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

