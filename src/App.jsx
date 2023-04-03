import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import Todo from "./Todo"
import CallBack from "./CallBack"

const App = () => {
  const [count, setCount] = useState(0);
  const [todoState, setTodos] = useState(["kurs bemblat", "kebet mewtat"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todoState={todoState} />
      <hr />
      <div>
        Ermija: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

function Hook () {
  return (
    <>
      <Todo/>
    </>
  );
}

function Call () {
  return (
    <>
      <CallBack/>
    </>
  );
}
export default Call;

