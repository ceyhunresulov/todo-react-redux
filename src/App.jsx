import "./App.css";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  return (
    <main className="container">
      <h1 className="title">To do List</h1>
      <TodoInput />
      <Todos />
    </main>
  );
}

export default App;
