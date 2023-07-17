import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ContactDetails from "./Components/ContactDetails";
import User from "./Components/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<ContactDetails />}/>
        <Route path="/contact/:idr" element={< User/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
