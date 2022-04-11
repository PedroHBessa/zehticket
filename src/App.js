import './App.css';
import './styles/index.scss';


import Hero from './components/Hero';
import Login from "./components/Login"
import Contact from "./components/Contact"
import EventList from "./components/EventList"
import EventScreen from "./components/EventScreen"
import Main from './components/Main';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path='/' element={<Main />} >
         <Route path='' element={<Hero />} />
         <Route path='contact' element={<Contact/>} />
         <Route path='login' element={<Login/>} />
         <Route path='signup' element={<Signup/>} />
         
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
