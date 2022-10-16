import React from 'react'


const Todo = ({ text, todos, todo, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(x => x.id !== todo.id))

        //delete from localStorage
        let elements = localStorage.getItem("todos");
        elements = JSON.parse(elements).filter(element => element.id !== todo.id);
        localStorage.setItem('todos', JSON.stringify(elements));
    }
    const completeHandler = () => {

        setTodos(todos.map((x)=>{
            if(x.id===todo.id){
                return{
                    ...x,completed:!x.completed
                }
            }
            return x;
      } ));

    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
        </div>

    )
}
export default Todo
