import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="addTask">
        <input placeholder="Digite o nome da tarefa" />
        <button>Adicionar Tarefa</button>
      </div>
      <div className="items"></div>
    </div>
  );
}

export default App;
