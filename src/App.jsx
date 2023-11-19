import Todo from "./components/Todo.jsx";
import TodoInput from "./components/TodoInput.jsx";
import Actions from "./components/Actions.jsx";
import "./App.css";
import { useState } from "react";

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
    title: "item5",
    status: true,
  },
];
// todos is a reference to a place in memory.
function printme(name){
  console.log(name)
}
export function App() {
  const [list, setList] = useState([]);
  //Note: const[switch, setSwitch]= useState("on"); setSwitch("on"); Nothing will be done since the state has not been changed!
  //In Arrays and Objects, push can not change refrence but it can change the array!
  //So we should use spread Operator:[]
  return (
    <div className="container">
      <div className="form">
        {/* <button
          onClick={() => {
            const nextItem = [...list,
              {
              title: "itemNew",
              status: false,
            }];

            setList(nextItem);
            console.log(list)
            console.log(typeof list)
          }}
        >
          Test Button
        </button> */}

        <TodoInput handleSubmit={printme}
          // handleSubmit={(value) => {
          //   const new_Item = {
          //     title: value,
          //     status: false,
          //   };
          //   const nextList = [...list, new_Item];
          //   setList(nextList);
          // }}
        />
        <br />
        <br />
        <Actions />
      </div>
      <div className="list">
        {list.map((item) => {
          return <Todo title={item.title} status={item.status} />;
          //Calling Todo Component, for example: Todo( {title: "salam", status: false} )
        })}
      </div>
    </div>
  );
}

export default App;
