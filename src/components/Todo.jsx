export default function Todo(props) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={props.status}
        onClick={() => {props.handleCheck(props.title)}}
      />
      <span>{props.title}</span>
      <button className="delete" onClick={() =>{
        console.log("delete clicked;")
      }}> Delete</button>
    </div>
  );
}

//function in js VS a Component:
function folan(a, b, c) {
  return a + b + c;
}

function Folan(props) {
  return props.a + props.b + props.c;
}
