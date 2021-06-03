import React from "react";
import MyWrapper from "./MyWrapper";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <MyWrapper />
    </div>
  );
};

export default App;

// const state = useState();

//   const [count, setCount] = useState(0);

//   const IncNum = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button className="btn btn-primary" onClick={IncNum}>Click Me</button>
//     </div>
//   )
