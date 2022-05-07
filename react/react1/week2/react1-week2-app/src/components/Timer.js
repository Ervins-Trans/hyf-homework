import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  });
  // every 1000 miliseconds a second passes, we useEffect once this happens.
  let formattedTime = new Date(time * 1000).toISOString().substring(19, 11); // for conversion here, we perceive "time" as miliseconds.
  return <div>{`Your session time is ${formattedTime} `}</div>; // we could ${time} instead, but I decided i wanted formatting
}
