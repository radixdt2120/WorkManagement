import React from 'react'
import { Link } from 'react-router-dom'
import TodayHeader from './TodayHeader'

const Navbar = () => {
    return (
        <section className="sticky-top">
            <TodayHeader />
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid p-2 px-5">
                    <div className="navbar-brand text-decoration-none">
                        <Link to="/" className="text-decoration-none text-white" >
                            LOGO
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item btn btn-info  p-0 px-2"> 
                                <Link to="/profile" className="nav-link"> <i className="fa fa-user"></i> Smit vadhiya</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
