import { useState, useEffect } from "react";

import TodoList from "../components/TodoList";

function ActivePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos =
      localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  return (
    <div>
      <TodoList
        sectionTitle="미완료 Todo"
        todos={todos}
        setTodos={setTodos}
        filter="undone"
      />
    </div>
  );
}

export default ActivePage;