import React from 'react'
import { DiVisualstudio } from 'react-icons/di';
// import { Link } from 'react-router-dom'
import './Aboutme.css'
import about from '../images/about.png';
import { faReact, faNodeJs, faJava, faHtml5, faJs, faGithub, faMdb, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Aboutme() {
    return (
        <div>

            <div className='container' style={{ height: "100vh", width: "70%", top: '60px', marginTop: '4rem' }}>
                <div className='row d-flex align-items-center justify-content-center' style={{ height: "100%" }}>
                    {/* Text Section */}
                    <div className='col-md-6' data-aos="fade-right">
                        <h4>Know Who I am</h4>
                        <p>
                            Hi Everyone, I am Subham Patnaik.
                            I am a Software Developer looking for positions in software development field.
                        </p>
                        <br />
                        <p>My Certifications</p>
                        <ul style={{ listStyle: 'none' }}>
                            <li><a className='btn btn-secondary mb-2' href='/'>Java Certifications</a></li>
                            <li><a className='btn btn-secondary' href='/'>AWS Cloud Foundation</a></li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className='col-md-6 d-flex justify-content-center align-items-center text-center' data-aos="fade-left">
                        <img
                            src={about}
                            alt="About Me"
                            className='img-fluid'  // Bootstrap's responsive image class
                            style={{ maxWidth: '100%', height: 'auto' }}  // Reducing size and keeping aspect ratio
                        />
                    </div>
                </div>
            </div>


            <div className="container-fluid" >
                <h4 className="text-center mb-4">Programming Skills</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-4 hov" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faJava} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-left">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faJs} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-left">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faDatabase} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faNodeJs} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faMdb} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-left">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faReact} size="3x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <h4 className="text-center mb-4">Tools I Use</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-4 hov" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faAws} size="3x" />
                                    {/* <DiVisualstudio /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-up">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faGithub} size="3x" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 hov" data-aos="fade-left">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    {/* <FontAwesomeIcon icon={DiVisualstudio} size="3x" /> */}
                                    <DiVisualstudio size={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Aboutme
