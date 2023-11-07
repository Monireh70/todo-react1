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
    title: "item4",
    status: true,
  },
  {
    title: "item3",
    status: true,
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
        {todos.map((item) => {
          return (<Todo title={item.title} status={item.status} />);
        })}
      </div>
    </div>
  );
}

export default App;
