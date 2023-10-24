import { useState, useCallback, useEffect, useRef } from "react";
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

  // useRef hook for input field password reference
  const passwordRef = useRef(null)


  // password generator method with useCallback hook, useCallback memorize the function as much as possible
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // condition if checkboxes are checked
    if (charAllowed) str += "~!@#$%^&*(){}[]/+-=";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char);
      pass += str.charAt(char); // to concat 
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed]);
  // can also put 'setPassword' for more optimization
  // if put just password like all, it will start running infinite 


  // method to copy password, optimizing it with useCallback hook
  const copyPasswordToClip = useCallback(() => {

    // select effect of password field
    passwordRef.current?.select(); // for good user experience
    // passwordRef.current?.setSelectionRange(0, 12);

    // to copy to clipboard
    window.navigator.clipboard.writeText(password)

  }, [password])  // dependency can be leave empty

  // passwordGenerator(); will not work bacause of useCallback, react take care of rendering
  // first method to call this function with onClick a button

  // --- useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed, passwordGenerator])
  // it will call when page is reload or if there is a change in above dependencies

  return (
    <>
      <div className="w-full max-w-lg text-center text-2xl mx-auto shadow-md rounded-md p-4 my-32 text-orange-500 bg-gray-950">
        <h1 className="text-4xl text-center mt-10 mb-10">Password Generator</h1>
        <div className="flex rounded-md overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full px-3 py-1"
            readOnly
            ref={passwordRef}   // useRef reference
          />
          <button
            onClick={copyPasswordToClip}
            className="outline-none bg-orange-700 text-white px-5 text-lg shrink-0 hover:opacity-80">
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
