//import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Page404 from "./Pages/Page404";
import Profile from "./Pages/Profile";
import Utils from "./Pages/Utils";

function App() {
  return (
    <>
      <Router>
         
        <Navbar />
        <div className="container-fluid p-0">

          <div className="row m-0">
            <div className="col-1 p-0"> 
              <div className="bg-dark p-4 full-height">
                {/* <ContextApis>
                  <Utils />
                </ContextApis> */}

              </div>
            </div>
            <div className="col-10 my-2">
              
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/util" element={<Utils />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="*" element={<Page404 />} />
            </Routes>
            </div>
          </div>
        </div>
    </Router>
    </>
  );
}

export default App;
