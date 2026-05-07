import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("M"); 

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
      priority: priority,
      createdAt: new Date()
    };

    setTodos([...todos, newTodo]);
    setInput(""); 
  };

  return (
  <div className="container">
    <h1 className="title">❤️나의 투두리스트❤️</h1>

    <div className="input-group">
      <input
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="H">H</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <button
        className="add-button"
        onClick={handleAdd}
      >
        추가
      </button>
    </div>

    <div className="filter-group">
      <button
        className="filter-button"
        onClick={() => setFilter("all")}
      >
        전체
      </button>

      <button
        className="filter-button"
        onClick={() => setFilter("done")}
      >
        완료
      </button>

      <button
        className="filter-button"
        onClick={() => setFilter("undone")}
      >
        미완료
      </button>
    </div>

    <TodoList
      todos={todos}
      setTodos={setTodos}
      filter={filter}
    />
  </div>
);
}

export default App;