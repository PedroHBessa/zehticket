import './App.css';
import './styles/index.scss';


import Hero from './components/Hero';
import Login from "./components/Login"
import Contact from "./components/Contact"
import EventList from "./components/EventList"
import EventScreen from "./components/EventScreen"
import Main from './components/Main';
import Payment from "./components/Payment"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Pix from './components/Pix';

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
         
         <Route path='events' element={<EventList/>} />
         <Route path='events/:id' element={<EventScreen />}/>
         <Route path='events/:id/payment' element={<Payment />} >
           <Route path='credit-card' element={<Payment />}/>
           <Route path='debit-card' element={<Payment />}/>
           <Route path='bank-slip' element={<Payment />}/>
           <Route path='pix' element={<Pix />}/>
         </Route>
          
      
       </Route>
     </Routes>
     </BrowserRouter>
 
    </div>
  );
}

export default App;
