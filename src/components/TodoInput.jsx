import { useState } from "react";

export default function TodoInput(props) {
  const [word, updateWord] = useState("");
  //change a  state (=react variable)  and see changes in page without need to render.
  //state is a variable which can be updated via a function . After update, the component will be render again automatically.

  //useState is a function,its output is an arry.
  //React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
  return (
    <div>
      <h1> Your Todo title : {word}</h1>
      <input
        value={word} //to s
        onKeyUp={(e) => {
          const exceptions = ["Shift", "Escape", "Tab"];
          if (e.key === "Backspace") {
            //??? const next_char = word -  char;
            return;
            //return: Do nothing
          } else if (exceptions.includes(e.key)) {
            return;
          }
          const char = e.key;
          const my_string = word + char;
          updateWord(my_string);
          console.log(my_string);
        }}
        //updateWord(word + char): ali: <empty string>,a,l
        id="todo-txt"
        type="text"
        placeholder="Please Type Your Activity"
      />
      <button
        onClick={() => {
          props.handleSubmit(word);
          updateWord(""); //to delete text from state.
        }}
        id="save-btn"
      >
        Save
      </button>
      {/*onClick={props.handleSubmit(word)} =>{123!} ....the first input of onclick is event e, while in this situation it is determined word. */}
    </div>
  );
}


