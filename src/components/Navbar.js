import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Optionally, import specific icons from FontAwesome
import { faHome, faUser, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

// import '/Navbar.css'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-grey fixed-top $zindex-fixed" style={{ backdropFilter: "blur(10px)" }}>
                <div className="container">
                    <Link className="navbar-brand" to="#">Subham....</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation" onClick={handleToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutme"> <FontAwesomeIcon icon={faUser} /> Aboutme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> <FontAwesomeIcon icon={faFileAlt} /> resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"> <FontAwesomeIcon icon={faEnvelope} /> contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects"> <FontAwesomeIcon icon={faEnvelope} /> projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-grey fixed-top" style={{ backdropFilter: "blur(10px)" }}>
                <div className="container">
                    <Link className="navbar-brand" to="#">Subham....</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={handleToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? "show text-center" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutme"> <FontAwesomeIcon icon={faUser} /> Aboutme</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://drive.google.com/file/d/1b4XQyVp28z-fHfGz7utcSvqOUwt3uGSv/view?usp=sharing" target="_blank" download="resume" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFileAlt} /> Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"> <FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects"> <FontAwesomeIcon icon={faEnvelope} /> Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
