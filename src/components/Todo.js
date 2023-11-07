export default function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" checked={props.checked} />
      <span>{props.title}</span>
      <button className="delete"> Delete</button>
    </div>
  );
}
