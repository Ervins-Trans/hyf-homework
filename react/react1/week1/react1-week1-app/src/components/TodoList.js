import tasks from "../data/tasks.json";
import TodoTask from "./TodoTask";

export default function TodoList() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "0px",
      }}
    >
      <h1>Here Be your tasks</h1>
      <ul style={{ listStyleType: "none", paddingTop: "20px" }}>
        {tasks.map((item) => {
          return (
            <TodoTask key={item.id} text={item.text} enddate={item.enddate} />
          );
        })}
      </ul>
    </div>
  );
}
