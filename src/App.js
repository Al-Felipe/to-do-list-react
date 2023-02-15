import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

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
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
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
            <Task
              taskName={item.taskName}
              id={item.id}
              completed={item.completed}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
