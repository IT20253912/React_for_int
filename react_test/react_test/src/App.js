import { useEffect, useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {
  const [apiId, setApiId] = useState("1");

  console.log(apiId);

  return (
    <div>
      <input
        type="text"
        value={apiId}
        onChange={(e) => setApiId(e.target.value)}
        placeholder="input number"
      />
    </div>
  );
};

export default App;
