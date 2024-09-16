import React from 'react'
import myFlipkartImage from '../images/flipkart.jpg'
import myfoodDelivery from '../images/fooddelivery.jpg'
import website from "../images/website.jpg";
import university from "../images/campus.jpg"
import portfolio from "../images/portfolio.jpg"

function Cards() {
    return (
        <div>
            <div className='container' style={{ top: '60px', marginTop: '4rem' }}>
                <h1 className='text-center'>My Projects So Far</h1>
                <div className='row p-4 project'>
                    <div className='col-md-4' data-aos="fade-left">
                        <div className='card crd-ho'>
                            <div className='card-body' style={{

                                background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${myFlipkartImage})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover', // Changed from 'contain' to 'cover' for better coverage
                                backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                                height: '100%', // Ensure the height covers the desired area

                            }}>
                                <p><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-white">
                                    <h4>Food Delivery App</h4>
                                </span>
                                    <br />
                                    <span className='text-white'>
                                        I made a personal portfolio website using simple HTML CSS and JavaScript.
                                        Formulated a learning journey centered on hands-on website creation; implemented cutting-edge features and
                                        animations using HTML, CSS
                                    </span>
                                    <br />
                                    <a className='btn btn-danger' href='/'>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' data-aos="fade-right">
                        <div className='card crd-ho'>
                            <div className='card-body' style={{

                                background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${website})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover', // Changed from 'contain' to 'cover' for better coverage
                                backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                                height: '100%' // Ensure the height covers the desired area

                            }}>
                                <p><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-white">
                                    <h4>Food Delivery App</h4>
                                </span>
                                    <br />
                                    <span className='text-white'>
                                        eact Js, MongoDB, NodeJs, ExpressJs
                                        To enhance my web development skills, I aim to master the MERN stack—comprising MongoDB, Express.js,
                                        React.js, and Node.js—to build robust and scalable applications.
                                        My goal is to build an app that features a smooth registration, followed by login, and blog pages with sections for
                                        Vlogs and My Vlogs where Users can browse, create, edit, and delete vlogs as needed
                                    </span>
                                    <br />
                                    <a className='btn btn-danger' href='/'>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' data-aos="fade-right">
                        <div className='card crd-ho'>
                            <div className='card-body' style={{

                                background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${myfoodDelivery})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover', // Changed from 'contain' to 'cover' for better coverage
                                backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                                height: '100%' // Ensure the height covers the desired area

                            }}>
                                <p><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-white">
                                    <h4>Food Delivery App</h4>
                                </span>
                                    <br />
                                    <span className='text-white'>
                                        HTML, CSS, JavaScript VS Code May 2023
                                        This was made using simple HTML , Bootstrap and JavaScript
                                        Objective of making this website was to learn HTML CSS and JavaScript
                                    </span>
                                    <br />
                                    <a className='btn btn-danger' href='/'>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' data-aos="fade-right">
                        <div className='card crd-ho'>
                            <div className='card-body' style={{

                                background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${university})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover', // Changed from 'contain' to 'cover' for better coverage
                                backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                                height: '100%' // Ensure the height covers the desired area

                            }}>
                                <p><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-white">
                                    <h4>Food Delivery App</h4>
                                </span>
                                    <br />
                                    <span className='text-white'>
                                        | HTML, CSS, Java, JSP, Servlet, MYSQL May 2023 Made using JSP, Servlet, Java My goal is to build an app that features a smooth registration, followed by login, where Users can browse, add,
                                        edit, and delete contacts as needed
                                    </span>
                                    <br />
                                    <a className='btn btn-danger' href='/'>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' data-aos="fade-right">
                        <div className='card crd-ho'>
                            <div className='card-body' style={{

                                background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${portfolio})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover', // Changed from 'contain' to 'cover' for better coverage
                                backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                                height: '100%' // Ensure the height covers the desired area

                            }}>
                                <p><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-white">
                                    <h4>Food Delivery App</h4>
                                </span>
                                    <br />
                                    <span className='text-white'>This website is under developement phase</span>
                                    <br />
                                    <a className='btn btn-danger' href='/'>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
