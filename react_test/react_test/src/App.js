import "./App.css";
import Main from "./Components/Main";

import myData from "./Data/myData";




function App() {

  const Mainblock = myData?.map(({name , city , position, id}) => {
    return <Main key={id} name={name} city={city} position={position}/>;
  });

  console.log(myData);

  return (
    <div className="main_container">
    <div>
      AUK learning center
      <h1>chathudu</h1>
    </div>
    <div className="mainBlock_container">
      {Mainblock}
    </div>
    </div>
  );
}

export default App;
