import { useState, useEffect } from "react";

import TodoList from "../components/TodoList";

const BASE_URL = "https://congachu.dev";
const STUDENT_CODE = "20245276";

function ActivePage() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/todos?code=${STUDENT_CODE}`
      );

      const data = await response.json();

      setTodos(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodoList
        sectionTitle="미완료 Todo"
        todos={todos}
        setTodos={setTodos}
        filter="undone"
        fetchTodos={fetchTodos}
      />
    </div>
  );
}

export default ActivePage;