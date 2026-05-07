import "../App.css";

function TodoItem({ text, done, priority, onDone }) {
  const getPriorityClass = () => {
    if (priority === "H") return "high";
    if (priority === "M") return "medium";
    if (priority === "L") return "low";
  };

  return (
    <li
      onClick={onDone}
      className={`todo-item ${getPriorityClass()} ${done ? "done" : ""}`}
    >
      {text} ({priority})
    </li>
  );
}

export default TodoItem;