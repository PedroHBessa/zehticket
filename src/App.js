import './App.css';
import './styles/main.scss';


import Hero from './components/Hero';
import Login from "./components/Login"
import Signup from "./components/Signup"
import EventList from "./components/EventList"
import EventScreen from "./components/EventScreen"
import Home from './components/Home';

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
       <Route path='/' element={<Home />} >
         <Route path='' element={<Hero />} />
         <Route path='signup' element={<Signup/>} />
         <Route path='login' element={<Login/>} />
         <Route path='events' element={<EventList/>} >
          <Route path='test' element={<EventScreen />}/>
         </Route>
       </Route>
     </Routes>
     </BrowserRouter>
 
    </div>
  );
}

export default App;
