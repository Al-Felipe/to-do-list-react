export const Task = (props) => {
  return (
    <div
      className="tasks"
      style={{
        backgroundColor: props.completed ? "green" : "white",
      }}
    >
      <h1>{props.taskName}</h1>
      <button
        onClick={() => props.completeTask(props.id)}
        className="finish-task"
      >
        Concluída
      </button>
      <button onClick={() => props.removeTask(props.id)} className="remove-btn">
        Remover
      </button>
    </div>
  );
};
