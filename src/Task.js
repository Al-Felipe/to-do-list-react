export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.removeTask(props.id)}> X </button>
      <button onClick={() => props.completeTask(props.id)}>Concluída</button>
    </div>
  );
};
