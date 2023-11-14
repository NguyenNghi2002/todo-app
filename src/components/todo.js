

function TodoCheckBox({todo,handleCheckBox}){
    return(
            <span 
                
                onClick={handleCheckBox} 
                className="noselect complete-box" 
            >
                {todo.complete? '✅':'⬛'}
            </span>
    );
}

function TodoPrompt({todo}){
    return(
        <div className="todo-prompt">
            <span className={todo.complete? "strike":null}>
                {todo.task}
            </span>

        </div>
        /**
         <span  style={{
             textDecoration:todo.complete? 'line-through':null,
             }}>
             {todo.task}
         </span>
         
         */
    );
}

export default function Todo({todo,toggleComplete,removeTodo}){

    const handleCheckBox=_=>{
        toggleComplete(todo.id);
        console.log(todo);
    }

    const handleRemove =_=>removeTodo(todo.id);
    
    const itemStyle ={
        background: `linear-gradient(to right, ${todo.backgroundColor}, ${todo.subBackgroundColor})`,
    }
    return(
        <li className="todo" style={itemStyle}>
            <TodoCheckBox 
                todo={todo}
                handleCheckBox={handleCheckBox}
                />

            <TodoPrompt
                todo={todo}
                />

            <div
                onClick={handleRemove}
                className='noselect'
            >
                <div className="tooltip">❌
                    <span className="tooltiptext">delete task</span>
                </div>
            </div>

        </li>
    );
}
