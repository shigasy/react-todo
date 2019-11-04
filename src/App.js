import React, {useState} from 'react';
import './App.scss'
import Form from './components/Form'
import List from './components/List'

export default function App() {

    const [todo, setTodo] = useState([])

    // データ保存
    const handleAdd = (e) => {
        e.preventDefault()
        // todo.push(e.target.title.value) 参照型だから、破壊的操作は更新されない
        // setTodo(todo.concat(e.target.title.value))
        setTodo([...todo, e.target.title.value])
        e.target.title.value = '';
        console.log(todo)
    }

    // データ削除
    const handleRemove = (i) => {
        // ----------------
        todo.splice(i, 1)
        setTodo(todo.concat()) // todoから削除された新しい配列をsetしている
        // ----------------

        // ----------------
        // setTodo(todo.splice(i, 1).concat()) // これは要素数1の配列が返ってきて、setしている
        // ----------------
    }

    return (
        <div className="siimple-box siimple--bg-dark">
            <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
            <Form handleAdd={handleAdd}/>
            <div className="siimple-rule"></div>
            <List todos={todo} handleRemove={handleRemove}/>
        </div>

    );
}
