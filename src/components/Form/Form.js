import { React } from 'react'



const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');

    }
    if (todos.length !== 0) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const setStatusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (

        <form>

            <input onChange={inputTextHandler} value={inputText} type="text" className='todo-input' />
            <button className='todo-button' type='submit' onClick={submitTodoHandler}>
                <i className='fas fa-plus-square'></i>
            </button>

            <div className="select">
                <select onChange={setStatusHandler} name="todos" className='filter-todo'>
                    <option value="All">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>

    );
}

export default Form