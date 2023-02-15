import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
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
              <h1>{item.taskName}</h1>
              <button onClick={() => removeTask(item)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
