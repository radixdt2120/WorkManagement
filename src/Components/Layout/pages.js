import React from 'react'
import {Routes ,Route} from "react-router-dom";

import Dashboard from '../../Pages/Dashboard';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/404';
import Profile from '../../Pages/Profile';
import Utils from '../../Pages/Utils';

const pages = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/util" element={<Utils />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default pages
