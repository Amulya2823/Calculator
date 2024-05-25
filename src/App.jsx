import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        className="border-4 border-black p-8 w-96 m-3 text-3xl"
        type="text"
        value={input}
        name="input"
        onChange={handler}
      />
      <br></br>
      <div className="flex">
        <button
          className="m-4 p-4 text-2xl font-bold bg-black text-white rounded-xl"
          onClick={() => {
            setResult(eval(input));
          }}
        >
          Result
        </button>
        <h1 className="text-3xl font-bold py-8">Result is : {result}</h1>
      </div>

      <div className="font-bold text-2xl">
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "1")}
        >
          1
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "2")}
        >
          2
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "3")}
        >
          3
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "4")}
        >
          4
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "5")}
        >
          5
        </button>
      </div>

      <div className="font-bold text-2xl">
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "6")}
        >
          6
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "7")}
        >
          7
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "8")}
        >
          8
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "9")}
        >
          9
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "10")}
        >
          10
        </button>
      </div>

      <div className="font-bold text-2xl">
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "+")}
        >
          +
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "-")}
        >
          -
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "*")}
        >
          *
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => setInput(input + "/")}
        >
          /
        </button>
        <button
          className="p-4 m-2 border-2 border-black rounded-lg"
          onClick={() => {
            setInput("");
            setResult(0);
          }}
        >
          Clr
        </button>
      </div>
    </div>
  );
}

export default App;
