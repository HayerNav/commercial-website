import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(to right, #bf0f93 0%, #f4711f 100%)"}}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element = {<HomePage/>} />
          <Route  path='/home' element = {<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
