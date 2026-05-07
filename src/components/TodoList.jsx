import TodoItem from "./TodoItem";

function TodoList({ sectionTitle, todos, setTodos, filter }) {
    const priorityOrder = {
        H: 3,
        M: 2,
        L: 1
    }
    const filteredTodos = todos.filter((todo) => {
  if (filter === "done") return todo.done;
  if (filter === "undone") return !todo.done;
  return true;
});
    const sortedTodos = [...filteredTodos].sort((a, b) => {
       return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    const handleDone = (id) => {
  const updated = todos.map((todo) =>
    todo.id === id
      ? { ...todo, done: !todo.done }
      : todo
  );
        setTodos(updated);
        console.log(updated);
};

    return (
        <section>
            <h2>{sectionTitle}</h2>
            <ul>
                {sortedTodos.map((todo) => (
                    <TodoItem key={todo.id} text={todo.text} priority={todo.priority}
                    createdAt={todo.createdAt} done={todo.done} onDone={() => handleDone(todo.id)}/>
                    
                ))}
            </ul>
        </section>
    );
}

export default TodoList;