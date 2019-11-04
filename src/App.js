import React, {useState, useEffect} from 'react';
import './App.scss'
import Form from './components/Form'
import List from './components/List'

export default function App() {

    const [todo, setTodo] = useState([])

    const handleAdd = (e) => {
        e.preventDefault()
        todo.push(e.target.title.value)
        setTodo(todo)
        e.target.title.value = '';
        console.log(todo)
    }
    useEffect(() => {
        console.log(todo)
    });

    return (
        <div className="siimple-box siimple--bg-dark">
            <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
            <Form handleAdd={handleAdd}/>
            <div className="siimple-rule"></div>
            <ul className="siimple-list">
                {todo.map((todo, i) => {
                    return <li key={i} className="siimple-list-item siimple--bg-white">{todo} <span
                        className="siimple-tag siimple-tag--error siimple-hover">Delete</span></li>})
                }
                <li className="siimple-list-item siimple--bg-white">aaaa<span className="siimple-tag siimple-tag--error siimple-hover">Delete</span></li>
            </ul>
        </div>

    );
}
