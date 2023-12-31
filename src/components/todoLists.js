import Todo from "./todo"

export default function TodoList({todos= [],toggleComplete,removeTodo}){
    

    return(
        <ul className="todo-list">
            {todos.map(todo=>(
                <Todo 
                key={todo.id}
                todo={todo} 
                toggleComplete ={toggleComplete}
                removeTodo={removeTodo}
                />

            ))}
        </ul>
    )

}