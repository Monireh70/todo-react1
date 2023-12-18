import { useState } from "react";

export function MyVar() {
  const [my_name, setName] = useState("Monireh");

  return (
    <div>
      Salam, {my_name}!
      <button
        onClick={() => {
          setName("Arghavan");
        }}
      >
        Change Name...
      </button>
    </div>
  );
}

//cannot export my_name,since it is limited to this State.
//export my_name;
