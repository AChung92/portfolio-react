import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am a front end developer with detailed full stack knowledge. I have currently been working in the financial industry for 7 years. I am working towards a Certificate in Full Stack Web Development from the University of Toronto, where i developed skills in HTML, CSS, JS, MERN Stack and SQL Server.</p>
                       
                        <p className="text-faded mb-5">My strong organizational skills, communication skills, and excellent problem-solving abilities allow me to effectively collaborate on cross-functional teams that include designers, software developers, scrum masters, and project managers. My assets include advanced education, professional background in finance, drive for success, and strong attention to detail.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About