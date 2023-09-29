import Anecdotes from "./components/AnecdoteList";
import CreateAnecdotes from "./components/AnecdoteForm";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <CreateAnecdotes />
    </div>
  );
};

export default App;

