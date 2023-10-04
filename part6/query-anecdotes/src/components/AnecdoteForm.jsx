import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNew } from "../services/anecdotes";
import { useNotificationDispatch } from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    createAnecdote(content);
    dispatch({ type: "UPDATE", payload: `You created '${content}'` });
    event.target.anecdote.value = "";
  };
  const { mutate: createAnecdote } = useMutation(createNew, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
    onError: () => {
      dispatch({
        type: "UPDATE",
        payload: "too short anecdote, must have length 5 or more",
      });
    },
  });

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;

