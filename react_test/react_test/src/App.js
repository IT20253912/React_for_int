import { useEffect, useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {
  const [apiId, setApiId] = useState("1");
  const [data, setData] = useState({});
  const [search, setSearch] = useState(0);

  // console.log(apiId);
  // console.log(data);

  useEffect(() => {
    if (apiId.length > 0) {
      console.log("useEffect is running");

      const apiCall = async () => {
        console.log("api call function");
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${apiId}`
        );
        const data = await res.json();

        if (data) {
          setData(data);
        }
      };

      if (apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
        console.log("Successfull if condition ");
        apiCall();
      }

      return () => {
        apiCall();
        console.log("clean up function");
      };
      // apiCall();
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={apiId}
        onChange={(e) => setApiId(e.target.value)}
        placeholder="input number"
      />
      <button onClick={()=>setSearch(pre=>pre===0?1:0)}>Search</button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
