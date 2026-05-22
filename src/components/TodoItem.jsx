function TodoItem({
  content,
  completed,
  onDone,
  onDelete,
}) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={onDone}
      />

      <span
        className={
          completed ? "done" : ""
        }
      >
        {content}
      </span>

      <button onClick={onDelete}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;