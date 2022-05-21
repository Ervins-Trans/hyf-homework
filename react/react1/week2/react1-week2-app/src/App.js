import "./App.css";
import TodoList from "./components/TodoList.js";
import Timer from "./components/Timer";
import { useState } from "react";
import "./App.css"; // stepping away from inline styling tried in week 1

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const todoExamples = [
  "Wash Car",
  "Feed pets",
  "Pet Pets",
  "Get some air",
  "Contemplate on existential matters",
];
function App() {
  const [todoList, setTodoList] = useState(todos);

  function addTodo() {
    const newTodo = {
      id: Date.now(), // this way id hopefully will never be the same to other elements
      description:
        todoExamples[Math.floor(Math.random() * todoExamples.length)],
    };
    setTodoList((currentList) => [...currentList, newTodo]);
  }

  function removeTodo(event) {
    let idToRemove = parseInt(event.target.closest("li").id); // either parseInt, or != in filter. React usually barks on not stricts.
    console.log(idToRemove);
    let newList = todoList.filter((item) => item.id !== idToRemove);
    console.log(newList);
    setTodoList(newList);
  }
  return (
    <div className="App">
      <h1>Here Be your tasks</h1>
      <Timer />
      <button className="buttonNew" onClick={addTodo}>
        {" "}
        Add New Todo{" "}
      </button>
      <TodoList todos={todoList} onRemove={removeTodo} />
    </div>
  );
}
export default App;
