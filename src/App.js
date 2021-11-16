import { useEffect, useState } from "react";

import getTodos from "./_helper/_helper";
import formatTodoData from "./util/utility";

import "./App.css";

// test

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let retrievedTodos = getTodos();
    retrievedTodos.then((todosList) => {
      todosList.json().then((todos) => {
        console.log(todos);
        setTodos(todos);
      });
    });
  }, []);

  return (
    <div className="App">
      <div>
        <div id="todoHeader">
          <h1>Todo Application</h1>
        </div>
        <div id="mainContainer">
          <div>{todos.length ? formatTodoData(todos) : null}</div>
        </div>
        <button
          onClick={() => {
            console.log(todos);
          }}
        >
          Generic Console Inspector
        </button>
      </div>
    </div>
  );
}

export default App;
