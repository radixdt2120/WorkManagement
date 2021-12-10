import React from 'react'
import Navbar from '../Header/Navbar'
import Pages from './pages'
import {Routes ,Route} from "react-router-dom";
import Clock from '../Clock/clock';

const index = ({children}) => {
    return (
        <div>
            <Clock />
            <Navbar />
            <div>
                <Pages />
            </div>
        </div>
    )
}

export default index
