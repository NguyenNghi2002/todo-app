import React,{useEffect, useState} from "react";
import TodoList from "./todoLists";
import TodoForm from "./todoForm";
import './Todo.css'

const storage_name = "Todo-app";
const initState =  JSON.parse(localStorage.getItem(storage_name)) || [];
function TodoApp() {
    const [todos,SetTodos] = useState(initState); // setup 'todos'
  
    
    useEffect(()=>{
        localStorage.setItem( storage_name,JSON.stringify(todos));
        console.log("SAVE");
        console.log(todos);
    }, [todos])
    


    function addTodo(todo){
        let list = [todo,...todos] /// create new list that have new item at first and followed by current list
        SetTodos( list);    /// Update current list
        console.log(list);
    }

    function removeTodo(id){
        SetTodos(todos.filter(todo=>todo.id !== id)) ///
    }

    function toggleComplete(id){
        SetTodos(
            todos.map(todo=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    };
                }else{
                    return todo;
                }
            })
        );
    }
  

        
    

    return (
        <div className="todo-app">
            
            <TodoForm 
                addTodo={addTodo}
            />
            <TodoList 
                todos={todos} 
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
            
        </div>
    );
  }

  export default TodoApp;