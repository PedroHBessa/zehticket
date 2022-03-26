import './App.css';

import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import Login from "./components/Login"
import Signup from "./components/Signup"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path='/' element={<NavBar />} >
         <Route path='' element={<Hero />} />
         <Route path='signup' element={<Signup/>} />
         <Route path='login' element={<Login/>} />
       </Route>
     </Routes>
     </BrowserRouter>
    {/*   <NavBar />
      <Hero />
      <Login /> */}
    </div>
  );
}

export default App;
