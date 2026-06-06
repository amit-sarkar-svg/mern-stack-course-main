import { useRef, useState } from "react";

// we are going to create stop watch
// it will have three buttons: start, stop, reset

function App() {
  const [time, setTime] = useState(0);
  const intervalIdref = useRef(null);

  function handlestart() {
    if (intervalIdref.current != null) {
      return;
    }

    intervalIdref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handlestop() {
    clearInterval(intervalIdref.current);
  }

  function handlereset() {
    clearInterval(intervalIdref.current);
    setTime(0);
  }

  return (
    <>
      <h1>Stopwatch: {time} </h1>
      <div>
        <button onClick={handlestart}> Start </button>
        <button onClick={handlestop}> Stop </button>
        <button onClick={handlereset}> Reset </button>
      </div>
    </>
  );
}

export default App;
