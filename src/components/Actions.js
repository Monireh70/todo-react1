export default function Actions() {
  return (
    <div>
      <button id="delete-some-btn">Delete Some Items</button>
      <select className="done_filter">
        <option value="All">All</option>
        <option value="ToDo">ToDo</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}
