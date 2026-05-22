import { useState, useEffect } from "react";

import TodoList from "../components/TodoList";

const BASE_URL = "https://congachu.dev";
const STUDENT_CODE = "20245276";

function HomePage() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

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

  const handleAdd = async () => {
    if (input.trim() === "") return;

    try {
      await fetch(
        `${BASE_URL}/api/todos?code=${STUDENT_CODE}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            content: input,
          }),
        }
      );

      fetchTodos();

      setInput("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="title">
        ❤️나의 투두리스트❤️
      </h1>

      <div className="input-group">
        <input
          className="todo-input"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="할 일을 입력하세요"
        />

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
          onClick={() =>
            setFilter("undone")
          }
        >
          미완료
        </button>
      </div>

      <TodoList
        sectionTitle=""
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        fetchTodos={fetchTodos}
      />
    </>
  );
}

export default HomePage;