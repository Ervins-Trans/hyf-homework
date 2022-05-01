function TodoTask(props) {
  let border = "1px solid #333";
  return (
    <li
      style={{
        backgroundColor: "#DDD",
        padding: "20px",
        marginTop: "5px",
        borderLeft: border,
        borderRight: border,
        borderBottom: border,
      }}
    >
      <p>
        <p>Task : {props.text} </p>
        <p> Before : {props.enddate} </p>
      </p>
    </li>
  );
}

export default TodoTask;
