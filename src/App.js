import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const removeTask = (itemName) => {
    setTodoList(todoList.filter((item) => item !== itemName));
  };

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="addTask">
        <input placeholder="Digite o nome da tarefa" onChange={getInput} />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
      <div className="items">
        {todoList.map((item) => {
          return (
            <div>
              <h1>{item}</h1>
              <button onClick={() => removeTask(item)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
