import TodoItem from "./TodoItem";

const BASE_URL = "https://congachu.dev";
const STUDENT_CODE = "20245276";

function TodoList({
  sectionTitle,
  todos,
  filter,
  fetchTodos,
}) {
  const filteredTodos = todos.filter(
    (todo) => {
      if (filter === "done")
        return todo.completed;

      if (filter === "undone")
        return !todo.completed;

      return true;
    }
  );

  const handleDone = async (
    id,
    completed
  ) => {
    try {
      await fetch(
        `${BASE_URL}/api/todos/${id}?code=${STUDENT_CODE}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            completed: !completed,
          }),
        }
      );

      fetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(
        `${BASE_URL}/api/todos/${id}?code=${STUDENT_CODE}`,
        {
          method: "DELETE",
        }
      );

      fetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      <h2>{sectionTitle}</h2>

      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            completed={todo.completed}
            onDone={() =>
              handleDone(
                todo.id,
                todo.completed
              )
            }
            onDelete={() =>
              handleDelete(todo.id)
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;