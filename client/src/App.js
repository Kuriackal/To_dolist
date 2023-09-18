
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
     </Router>
     {/* <Register/>
     <Login/> */}
    </div>
  );
}

export default App;
