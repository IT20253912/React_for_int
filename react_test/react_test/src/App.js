import { useState } from "react";
import './App.css';

const App = () => {
  const [imageurl, setimageurl] = useState("");
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [position, setposition] = useState("");

  const [mydata, setMydata] = useState([]);

  console.log(mydata);

  return (
    <div className="main_container">
      <h1>chathudu</h1>
      <div className="main_left">
        <input
          type="text"
          value={imageurl}
          onChange={(e) => {
            e.preventDefault();
            setimageurl(e.target.value);
          }}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setcity(e.target.value);
          }}
        />
        <input
          type="text"
          value={position}
          onChange={(e) => {
            e.preventDefault();
            setposition(e.target.value);
          }}
        />

        <button
          onClick={() => {
            // console.log({
            //   imageurl,
            //   name,
            //   city,
            //   position,
            // });

            setMydata((premydata) => {
              return [...premydata,{
                image : imageurl,
                name,
                city,
                position,
              }]
            })



            // setimageurl("");
            setimageurl((pre) => {
              if (pre.length > 0) {
                return "";
              } else {
                return pre;
              }
            });

            setname((preName) => {
              if (preName.length > 0) {
                return "";
              } else {
                return preName;
              }
            });

            setcity((preCity) => {
              if (preCity.length > 0) {
                return "";
              } else {
                return preCity;
              }
            });

            setposition((prePosition) => {
              if (prePosition.length > 0) {
                return "";
              } else {
                return prePosition;
              }
            });

            

          }}
        >
          Submit
        </button>
      </div>
      <div className="main_right">

      </div>
    </div>
  );
};

export default App;
