import React, { useState, useEffect } from "react";

function App() {
    const [todo, setTodo] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === ""){
            return;
        }
        // 함수에 값을 넣을때 todos.push() 또는 todo = "" 처럼 State를 직접적으로 수정하지 않고, setTodo 또는 setTodos 같은 수정하는 함수를 사용
        // 함수 사용시 1번째 인수는 현재 State 값 (currentArray는 현재 todos 값)
        setTodos((currentArray) => [...currentArray, todo]);
        setTodo("");
    };
    
    console.log(todos); // string으로 된 array
    console.log(todos.map((value, index) => <li key={index}>{value}</li>)); // React elementd인 array

    return (
        <div>
            <h1>My To Dos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} type="text" placeholder="Write a To Do"/>
                <button>Add</button>
            </form>
            <hr/>
            <ul>
                {todos.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default App;

// JSX에서 Javascript 사용시 {} 중괄호 안에 사용
// todos.length나 todos.map()도 기본적인 Javascript Code라서 {}에 넣음
// map() 함수 : array 값을 하나씩 가져와서, 각각 ()안의 값 또는 함수를 적용시킴