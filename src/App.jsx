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

export function App() {
  const [list, setList] = useState([]);
  const [filter, setfilter] = useState("All");
  //Note: const[switch, setSwitch]= useState("on"); setSwitch("on"); Nothing will be done since the state has not been changed!
  //In Arrays and Objects, push can not change refrence but it can change the array!
  //So we should use spread Operator:[]

    //----------------------------Add--------------------------

  function handle(text) {
    const new_item = {
      title: text,
      status: false,
    };
    const new_list = [...list, new_item];
    setList(new_list); //without setList any item can not add to page, since app will be done again using setList.
  }

  //----------------------------Toggole--------------------------
  function toggleStatus(title) {
    console.log("clicked");
    //We need a new array with new reference and one changed status.
    const newList = list.map((item) => {
      // if (item.title === title){
      //   item.status = !item.status;
      // }
      if (item.title === title) {
        return {
          title: item.title,
          status: !item.status,
        };
      }else{
        return item
      }
    });
    console.log("toggole", list, newList);
    setList(newList);
  }

  //----------------------------Filter--------------------------
  //A new List to list
  const filtered = list.filter((todo) => {
    if (filter==="ToDo"){
    return todo.status===false ;
  }else if(filter==="Done"){
    return todo.status===true ;
  }else {
    return true
  }
}
  )
  console.log("filtered" ,filtered)

 // console.log("filter",filter) //we have access to all,todo,done in app!

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

        <TodoInput
          handleSubmit={handle}
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
        
        <Actions handlefilter={setfilter} filter={filter}/>
        {/* handleSelect={hadlechoose} */}
      </div>
      <div className="list">
        {/* render base on filtered.map instead of list.map */}
        {filtered.map((item) => {
          return (
            <Todo
              title={item.title}
              status={item.status}
              handleCheck={toggleStatus}
            />
          );
          //Calling Todo Component, for example: Todo( {title: "salam", status: false} )
        })}
      </div>
    </div>
  );
}

export default App;
