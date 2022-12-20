import { Routes, Route } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Daftar from "./pages/login/Daftar";
import Masuk from "./pages/login/Masuk";

import { HOME, ABOUT, CONTACT, LOGIN, REGISTER  } from "./router";

function App() {
  return ( 
    <div>
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Contact />} path={CONTACT} />
        <Route element={<Daftar />} path={REGISTER} />
        <Route element={<Masuk />} path={LOGIN} />
      </Routes>           
    </div>     
    
  );
}

export default App;
