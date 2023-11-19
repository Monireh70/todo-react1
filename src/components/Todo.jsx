export default function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" checked={props.status} />
      <span>{props.title}</span>
      <button className="delete"> Delete</button>
    </div>
  );
}


//function in js VS a Component:
function folan(a, b, c){
  return a+b+c;
}

function Folan(props){
  return props.a +props.b+ props.c;
}