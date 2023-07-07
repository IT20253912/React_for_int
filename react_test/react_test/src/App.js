import "./App.css";
import Main from "./Components/Main";

import myData from "./Data/myData";




function App() {

  const Mainblock = myData?.map(({name , city , position, id}) => {
    return <Main key={id} name={name} city={city} position={position}/>;
  });

  console.log(myData);

  return (
    <div>
      {Mainblock}
    </div>
  );
}

export default App;
