import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const User = () => {
  const [data, setData] = useState({});
  const { idr } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idr}`
      );
      const data = await res.json();

      if (data) {
        setData(data);
      }
    };

    getData();

    return () => {
      getData();
    };
  }, [idr]);

  return (
    <div>
      <h1>User page </h1>
      {data?(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvAR-8HE-tSNrccQaN0CI1LTNxglLCfB0C9DTeoA_DfHOUj8p9MY1qO1-2W1o_OVH5Bk&usqp=CAU" />
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
        </div>
      ):null}
      <Link to="/contact">Back</Link>
    </div>
  );
};

export default User;
