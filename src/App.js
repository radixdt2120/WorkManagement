//import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Page404 from "./Pages/Page404";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
  </Router>
  );
}

export default App;
