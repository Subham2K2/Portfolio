import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneno: "",
        msg: "",
    })

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        // const response = fetch(`http://localhost:5000/api/auth`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })

        try {
            const response = await fetch(`http://localhost:5000/api/auth`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                toast.success("Form submitted successfully!", { autoClose: 3000 });
                setUser({ name: "", email: "", phoneno: "", msg: "" }); // Reset form after successful submission
            } else {
                toast.error("Failed to submit the form. Please try again.", { autoClose: 3000 });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred. Please try again.", { autoClose: 3000 });
        }
    }


    return (
        <div>
            {/* <Navbar /> { height: "60vh", width: "70%", top: '60px', marginTop: '4rem' }*/}

            {/* <div className="container" style={{ minHeight: "40vh", marginTop: '4rem', width: "70%" }}>
                <h4 className="text-center">Contact Page</h4>
                <div className="row d-flex align-items-center justify-content-center w-100" style={{}}>
                    {/* Text Section }
                    <div className="col-md-6 col-lg-5 text-center">
                        <div className='d-flex justify-content-centre align-items-centre text-centre'>
                            <h4>Let's Chat!! Send me a message</h4>
                            <a className="d-block mb-2">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>

                        </div>
                    </div>
                    {/* Form Section }
                    <div className="col-md-6 col-lg-7">
                        <div className="card" style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <div className="card-body">

                                <form className="container mt-3" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" name="name" value={user.name} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" name="email" value={user.email} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPhone" className="form-label">Phone number</label>
                                        <input type="text" className="form-control" id="exampleInputPhone" name="phoneno" value={user.phoneno} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="validationTextarea" className="form-label">Message</label>
                                        <textarea className="form-control" id="validationTextarea" placeholder="Required message" name="msg" value={user.msg} onChange={handleInput}></textarea>
                                        <div className="invalid-feedback">
                                            Please enter a message.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ padding: 0, height: "20vh" }}>
                <h4 className="text-center mb-4">Contact</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-4">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='location container-fluid ' style={{ padding: 0, height: "20vh", marginTop: "5rem" }}>
                <h4 className='text-center'>Address</h4>
                <div className="embed-responsive" style={{ position: "relative", overflow: "hidden", height: "100%" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.17962240529!2d82.53871029334407!3d19.050767246950457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3abffa8d1836b5%3A0x43dc280ce43b79e5!2sBorigumma%2C%20Odisha%20764056!5e0!3m2!1sen!2sin!4v1726286082325!5m2!1sen!2sin"
                        style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div> */}


            <div className="container" style={{ minHeight: "40vh", marginTop: '4rem', width: "70%" }}>
                <h4 className="text-center">Contact Page</h4>
                <div className="row d-flex align-items-center justify-content-center w-100">
                    {/* Text Section */}
                    <div className="col-md-6 col-lg-5 text-center">
                        <div className='d-flex justify-content-center align-items-center text-center'>
                            <h4>Send me a message</h4>
                        </div>
                    </div>
                    {/* Form Section */}
                    <div className="col-md-6 col-lg-7">
                        <div className="card" style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <div className="card-body">
                                <form className="container mt-3" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" name="name" value={user.name} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" name="email" value={user.email} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPhone" className="form-label">Phone number</label>
                                        <input type="text" className="form-control" id="exampleInputPhone" name="phoneno" value={user.phoneno} onChange={handleInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="validationTextarea" className="form-label">Message</label>
                                        <textarea className="form-control" id="validationTextarea" placeholder="Required message" name="msg" value={user.msg} onChange={handleInput}></textarea>
                                        <div className="invalid-feedback">
                                            Please enter a message.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ padding: 0, marginTop: "5rem" }}>
                <h4 className="text-center mb-4">Contact</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-4" data-aos="fade-right">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="fade-up">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="fade-left">
                            <div className="card shadow-lg" style={{ height: '10rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <a className="d-block mb-2">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='location container-fluid' style={{ padding: 0, height: "20vh", marginTop: "5rem" }}>
                <h4 className='text-center'>Address</h4>
                <div className="embed-responsive" style={{ position: "relative", overflow: "hidden", height: "100%" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.17962240529!2d82.53871029334407!3d19.050767246950457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3abffa8d1836b5%3A0x43dc280ce43b79e5!2sBorigumma%2C%20Odisha%20764056!5e0!3m2!1sen!2sin!4v1726286082325!5m2!1sen!2sin"
                        style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* <Footer /> */}
            <ToastContainer />
        </div>
    )
}

export default Contact
