import TodoItem from "./TodoItem";

function TodoList({ sectionTitle, todos }) {
    const priorityOrder = {
        H: 3,
        M: 2,
        L: 1
    }
    const sortedTodos = [...todos].sort((a, b) => {
       return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    return (
        <section>
            <h2>{sectionTitle}</h2>
            <ul>
                {sortedTodos.map((todo) => (
                    <TodoItem key={todo.id} text={todo.text} priority={todo.priority} createdAt={todo.createdAt} />
                    
                ))}
            </ul>
        </section>
    );
}

export default TodoList;