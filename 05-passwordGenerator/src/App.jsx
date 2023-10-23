import { useState, useCallback } from "react";
import "./App.css";

function App() {
  // password lenght
  const [lenght, setLenght] = useState(8);
  // number checkbox
  const [numberAllowed, setNumberAllowed] = useState(false);
  // character checkbox
  const [charAllowed, setCharAllowed] = useState(false);
  // input field for password
  const [password, setPassword] = useState("");

  // password generator method with useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // condition if checkboxes are checked
    if (charAllowed) {
      str += "~!@#$%^&*(){}[]/+-=";
    }
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-lg text-center text-2xl mx-auto shadow-md rounded-md p-4 my-20 text-orange-500 bg-gray-950">
        <h1 className="text-2xl text-center mt-5 mb-5">Password Generator</h1>
        <div className="flex rounded-md overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full px-3 py-1"
          />
          <button className="outline-none bg-orange-700 text-white px-5 text-lg shrink-0">
            Copy
          </button>
        </div>


        <div className="flex text-sm gap-x-12">

          {/* range slider */}
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={20}
              value={lenght}
              className="cursor-pointer w-20"

              // slide range to set lenght
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label>Lenght: {lenght}</label>
          </div>


          {/* number checkbox */}
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevCheck) => !prevCheck);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>


          {/* character checkbox */}
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prevCheck) => !prevCheck);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
