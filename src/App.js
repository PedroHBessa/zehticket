import './App.css';

import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Login />
    </div>
  );
}

export default App;
