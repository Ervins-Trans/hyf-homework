function TodoTask(props) {
  // id in li.id is exposed to later target it with remover. span.id is exposed for visual clarity for testing purposes.
  return (
    <li className="todoItemCard" id={props.id}>
      <div>
        <p className="taskText"> Task : {props.description} </p>
        <span> ID = {props.id}</span>
      </div>
      <div className="cardControlls">
        <label class="switch">
          <input type={"checkbox"} onChangeCapture={handleChange}></input>
          <span class="slider round"></span>
        </label>
        <button id="deleteTask" onClick={props.removeTodo}>
          Delete
        </button>
      </div>
    </li>
  );
}
function handleChange(event) {
  if (event.target.checked === true) {
    console.log(`Done Handled`);
    event.target.closest("li").classList.add("taskDone");
  } else {
    event.target.closest("li").classList.remove("taskDone");
    console.log(`Undone Handled`);
  }
}
export default TodoTask;
