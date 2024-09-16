import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div>
            <div className="container-fluid" style={{ backdropFilter: "blur(10px)" }}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            Nothing
                        </Link>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><Link className="text-muted" to="https://github.com/Subham2K2"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <li className="ms-3"><Link className="text-muted" to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li className="ms-3"><Link className="text-muted" to="https://www.linkedin.com/in/subham-patnaik-aba3b81b7/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                    </ul>
                </footer>
            </div>

        </div>

    )
}

export default Footer
