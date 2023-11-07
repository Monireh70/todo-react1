import logo from "./logo.svg";
import Todo from "./components/Todo.js";
import TodoInput from "./components/TodoInput.js";
import Actions from "./components/Actions.js";
import "./App.css";

const todos = [
  {
    title: "item1",
    status: false,
  },
  {
    title: "item2",
    status: true,
  },
  {
    title: "item3",
    status: false,
  },
];
export function App() {
  return (
    <div className="container">
      <div className="form">
        <TodoInput />
        <br />
        <br />
        <Actions />
      </div>
      <div className="list">
        {todos.map((item)=>{
          return (<Todo title={item.title} status={item.title} />);
        
       })}
        </div>
    </div>
  );
}

export default App;

