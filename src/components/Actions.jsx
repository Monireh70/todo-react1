

export default function Actions(props) {
  
  return (
    <div>
      <p>{props.filter}</p>
      <button id="delete-some-btn">Delete Some Items</button>
      <select
      // which option is selected is determined here:
        value={props.filter} 
        className="done_filter"
        onChange={(e) => {
          //Note:e in React is not exactly event in javascript!
          //props.handleSelect();
          const value = e.target.value; //All,ToDo,Done
          console.log("value of e is", value);  //it is equal with dom
          props.handlefilter(value); //props.setfilter is incorrect!. props.handlefilter is incorrect!
        }}
      > 
      {/* order of option tags is determined here: */}
        <option value="ToDo">ToDo</option> 
        <option value="All">All</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}
