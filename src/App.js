import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

// test

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let retrievedTodos = getTodos();
    retrievedTodos
      .then((todosList) => {
        todosList.json().then((x) => {
          return x;
        });
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Main code for Tell.com take home test project.</p>
      </header>
      <div>
        <div>
          <h1>Todo Application</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
