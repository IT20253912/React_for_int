
import './App.css';
import Main from './Components/Main';

const name = "name test";
const position = "position test";

const myObj = {
  name:`${name}`,
  position:`${position}`
}
function App() {

  return (
    <>
    <div>
        chathudu
        <Main />
        <Main />
        <Main>
          <p>{name}</p>
          <p>{myObj.position}</p>
        </Main>
        <Main name="saman" position="SE" city="colombo"/>
    </div>
    </>
  );
}

export default App;
