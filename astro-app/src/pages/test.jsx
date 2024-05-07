import { useState } from "react";

export default function TestIndex() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter+1)} className="button">up</button>
    </div>
  );
}
