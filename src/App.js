import { useEffect, useState } from "react";

import getTodos from "./_helper/_helper";
import formatTodoData from "./util/utility";

import "./App.css";

// test

function App() {
  const [todos, setTodos] = useState([]);
  const [showOnly, setShowOnly] = useState("all");

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
          <div id="mainContainerInner">
            <div>{todos.length ? formatTodoData(todos, showOnly) : null}</div>
          </div>
          <div id="mainContainerButtons">
            <div className="buttonDiv">
              <button
                onClick={() => {
                  setShowOnly("all");
                }}
              >
                All
              </button>
            </div>
            <div className="buttonDiv">
              <button
                onClick={() => {
                  setShowOnly("active");
                }}
              >
                Active
              </button>
            </div>
            <div className="buttonDiv">
              <button
                onClick={() => {
                  setShowOnly("completed");
                }}
              >
                Completed
              </button>
            </div>
          </div>
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
