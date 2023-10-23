import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#212121");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-1 shadow-lg bg-white px-1 py-1 rounded-md">
            <button
              // onClick={setColor("red")} can't pass para here
              // onClick{setColor} this will work function ref but cannot pass parameters
              // onClick generally expect a callback function

              onClick={() => setColor("red")} // change bg color with callback with onclick
              
              className="outline-none px-4 py-2 rounded text-white shadow-lg text-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-2 rounded text-white shadow-lg text-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-2 rounded text-white shadow-lg text-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("#212121")}
              className="outline-none px-4 py-2 rounded text-white shadow-lg text-lg"
              style={{ backgroundColor: color }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
