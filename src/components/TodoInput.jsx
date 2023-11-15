function OnAddItem(){
  console.log("clicked")
}


let word= "";




export default function TodoInput() {
  return (
    <div >
      <h1> Your Todo title: Salam</h1>
      <input onKeyDown={(e) =>
      {
        let char= e.key ;
  word = word + char ;
  console.log(word)
      }}
        id="todo-txt"
        type="text"
        placeholder="Please Type Your Activity"
      />
      <button onClick={OnAddItem} id="save-btn">Save</button>
    </div>
  );
}
