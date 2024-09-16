import React, { useEffect, useState } from 'react'
import graduation from '../images/graduation.jpg'
import school from '../images/school.jpg'
import intermediate from '../images/campus.jpg'
import avatar from "../images/avatar.svg"

import Typewriter from "typewriter-effect";

function Home() {

    const [title, setTitle] = useState('');
    const name = "My name is Subham Patnaik"
    let index = 1

    useEffect(() => {
        const typeWriter = () => {
            setTitle(name.slice(0, index));
            index = index > name.length ? 1 : index + 1

            setTimeout(() => {
                typeWriter();
            }, 200)
        };

        typeWriter();
    }, [])

    // typeWriter();
    return (
        <div>

            <div className='container' style={{ minHeight: "calc(100vh - 100px)", marginTop: '4rem' }}>
                <div style={{ height: "80vh", width: "100%" }}>
                    <div className='d-flex align-items-center justify-content-center' style={{ height: "100%" }}>
                        {/* Text Section */}
                        <div className='text-center'>
                            <h2>My name is Subham Patnaik</h2>
                            <h4>
                                I am a
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Software Developer",
                                            "Freelancer",
                                            "MERN Stack Developer",
                                            "Java Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </h4>
                            <a href='mailto:subhampatnaik02@gmail.com' className='btn btn-secondary'>Hire Me</a>
                        </div>
                    </div>
                </div>

                <section className="campus">
                    <h1>My Education</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>


                    <div className="row">
                        <div className="campus-col" data-aos="fade-right">
                            <img src={school} alt="" />
                            <div className="layer text-center">
                                <h5>Matriculation(Government High Schools Of Borigumma - 2017, status-passed, 78%)</h5>
                            </div>
                        </div>
                        <div className="campus-col" data-aos="fade-up">
                            <img src={intermediate} alt="" />
                            <div className="layer text-center">
                                <h5>Matriculation(Government High Schools Of Borigumma - 2017, status-passed, 78%)</h5>

                            </div>
                        </div>
                        <div className="campus-col" data-aos="fade-left">
                            <img src={graduation} alt="" />
                            <div className="layer text-center">
                                <h5>Matriculation(Government High Schools Of Borigumma - 2017, status-passed, 78%)</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='container' style={{ marginTop: "4rem", height: "60vh", width: "70%" }}>
                    <div className='row d-flex align-items-center justify-content-center' style={{}}>
                        {/* Text Section */}
                        <div className='col-md-6 text-center' data-aos="fade-right">
                            <h4>Let Me Introduce Myself</h4>
                            <p>
                                Hey there 👋
                                My name is Subham Patnaik, but you can call me SAM for short. I am a passionate and dedicated autodidact who completed a Bachelor Degree in Computer Science and Engineering at Odisha University Of Technology and Research, Bhubaneswar. I am continually looking for opportunities to interact with the developer community and gain knowledge from their experiences. I am an ambitious and self-paced developer/learner looking for technical positions in open source and software development.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className='col-md-6 d-flex justify-content-center align-items-center text-center' data-aos="fade-left">
                            <img
                                src={avatar}
                                alt="About Me"
                                className='img-fluid'  // Bootstrap's responsive image className
                                style={{ maxWidth: '60%', height: 'auto' }}  // Reducing size and keeping aspect ratio
                            />
                        </div>
                    </div>
                </div>






            </div>
        </div>


    )
}

export default Home
