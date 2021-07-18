import { useState } from "react";
const Box = () => {
  let [num, Counter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          Counter(num+=1)
        }}
      >{num}</button>
    </div>
  );
};

export default Box;