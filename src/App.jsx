import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
