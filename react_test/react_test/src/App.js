import React, { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  const Mainblock = myData?.map(({ name, city, position, id }) => {
    return <Main key={id} name={name} city={city} position={position} />;
  });

  const [myVar, setmyVar] = useState({
    name: "nameOne",
    city: "cityOne",
    position: "positionOne",
  });

  const [input, setInput] = useState('');

  const clickHandle = () => {
    setmyVar((prevState) => ({
      ...prevState,
      name: "sahassara",
    }));
  };

  console.log(input);

  return (
    <div className="main_container">
      <div>
        AUK learning center
        <h1>chathudu</h1>
        <h2>{myVar.name}</h2>
        <h2>{input}</h2>
      </div>
      <div className="mainBlock_container">{Mainblock}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={clickHandle}
      >
        click me
      </button>
      <br />
      <br />
      <input
        style={{
          border: "1px solid red",
          fontSize: "14px",
          padding: "7px",
        }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
