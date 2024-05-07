import { useEffect, useState } from "react";

export default function Journals(props : {url: string}) {
  const [counter, setCounter] = useState(0);
  const [res, setRes] = useState('');
  
  useEffect(() => {
    fetch(props.url+"/journals")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRes(data['data'][0]['attributes']['title']);
      });
  }, []);

  return (
    <div>
      <p>{res}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter+1)} className="button">up</button>
    </div>
  );
}
