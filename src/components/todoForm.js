import { useState } from "react"

export default function TodoForm({addTodo}){
    const [input,SetInput] = useState('');
    // eslint-disable-next-line
    const [todo,SetTodo] = useState({});


   

    const HandleInput=e=>{
        e.preventDefault();
        
        SetInput(e.target.value);
    }


    const HandleSumit = e=> {
        e.preventDefault();

        var text = input.trim();
        var val = Math.random();
        if(text){
            let form = {
                id: Math.floor(Math.random() * 10000),
                task: text,
                complete :false,
                backgroundColor : '#'+val.toString(16).substr(-6),
                subBackgroundColor : '#'+ (val * 15).toString(16).substr(-6)
            }

            SetTodo(form);
            addTodo(form);
            SetInput('');
        }
    }


    return(
        <div className="todo-form">
            <h1>To Do 📃 Plan</h1>

            <form onSubmit={HandleSumit} >
                <input type="text" placeholder='Task'
                    onChange={HandleInput}
                    value={input}
                    spellCheck = 'false'
                    maxLength={70}
                />
                <input  type='button' value='Submit'  
                    onClick={HandleSumit}/>
            </form>
        </div>
    )
}