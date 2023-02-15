import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [addTask, setAddTask] = useState("");

  const getInput = (e) => {
    setAddTask(e.target.value);
  };

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="addTask">
        <input placeholder="Digite o nome da tarefa" onChange={getInput} />
        <button>Adicionar Tarefa</button>
      </div>
      <div className="items"></div>
    </div>
  );
}

export default App;
