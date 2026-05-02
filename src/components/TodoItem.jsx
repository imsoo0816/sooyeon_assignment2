function TodoItem({ text, createdAt, priority }) {
    return (
        <li className="todo-item">
    <div className={`priority ${priority}`}>
        {priority}
    </div>

    <div className="text">
        {text}
    </div>

    <div className="createdAt">
        {createdAt}
    </div>
</li>
    )
}

export default TodoItem;    