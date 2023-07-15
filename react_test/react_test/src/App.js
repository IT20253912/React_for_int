import { useEffect, useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {
  const [apiId, setapiId] = useState("1");
  const [data, setdata] = useState({});

  console.log(apiId);
  console.log(data);

  useEffect(() => {
    // console.log("use effect running!!");
    const apicall = async () => {
      console.log("API call runnnig")
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiId}`
      );
      const data = await res.json();

      if (data) {
        setdata(data);
      }
    };

    if (apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
        console.log("useEffect is running !!!");
        apicall();
    }

    return () => {
      console.log('clean up function start');
      apicall();
    }

  }, [apiId]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter ID"
        value={apiId}
        onChange={(e) => setapiId(e.target.value)}
      />
      {data && (
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
