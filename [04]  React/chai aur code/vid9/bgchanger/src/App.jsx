import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-xl">
            <button
              onClick={()=> setColor("red")}
              className="outline-none px-5 py-1 rounded-xl text-amber-50 shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={()=> setColor("blue")}
              className="outline-none px-5 py-1 rounded-xl text-amber-50 shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={()=> setColor("green")}
              className="outline-none px-5 py-1 rounded-xl text-amber-50 shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={()=> setColor("violet")}
              className="outline-none px-5 py-1 rounded-xl text-amber-50 shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
