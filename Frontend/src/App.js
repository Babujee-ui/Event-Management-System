import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Nomatch from './components/Nomatch';
import Events from './components/Events';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import { Auth } from './components/Auth';
import Admin from './components/Admin';
import Create1 from './components/Create1';
import Create from './components/Create2';
import Booking from './components/Booking';
import View from './components/View';

function App() {
  return (
    <Auth>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/create1' element={<Create1/>}/>
        <Route path='/create2' element={<Create/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </div>
    </Auth>
  );
}

export default App;
