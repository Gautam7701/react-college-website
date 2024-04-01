import React from 'react'
import aboutimg from "../../assets/about.png"
import playimg from "../../assets/play-icon.png"
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className="left-a">
                <img className="about_img" src={aboutimg} alt="" />
                <img className = "play_img" src={playimg} alt="" />
            </div>
            <div className="right-a">
                <div className='heading-about'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's <br />Leaders Today</h2>
                </div>
                <p className='para-about'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
<br />
                With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
<br />
                Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About
