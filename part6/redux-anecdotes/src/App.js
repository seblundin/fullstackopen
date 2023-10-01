import Anecdotes from "./components/AnecdoteList";
import CreateAnecdotes from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <Anecdotes />
      <CreateAnecdotes />
    </div>
  );
};

export default App;

