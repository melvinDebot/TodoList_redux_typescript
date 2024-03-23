import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import TodoList from "./features/TodoList/TodoList";

const App: React.FC = () => {
  return (
    <>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TodoList />
    </>
  );
};

export default App;
