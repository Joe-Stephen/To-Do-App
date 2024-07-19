import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <h1>To Dos</h1>
      <TodoWrapper />
    </div>
  );
}

export default App;
