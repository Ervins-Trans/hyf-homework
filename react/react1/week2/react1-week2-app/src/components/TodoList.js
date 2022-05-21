import TodoTask from "./TodoTask";

export default function TodoList(props) {
  if (props.todos.length === 0) {
    return (
      <div>
        <h2>Todo List Empty</h2>
      </div>
    );
  } else {
    return (
      <div className="todoList">
        <ul>
          {props.todos.map((item) => {
            return (
              <TodoTask
                key={item.id}
                id={item.id}
                description={item.description}
                enddate={item.enddate}
                removeTodo={props.onRemove}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
