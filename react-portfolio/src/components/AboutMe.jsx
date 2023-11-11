import React from 'react'
import profilePic from "../assets/images/profile.jpg"
import "../styles/AboutMe.css"

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="divWrapper">
                <img src={profilePic} />
            </div>
            <div className="content">
                <p>I live in Bountiful, Utah with my wife and son. I am currently attending the University of
                    Utah Coding Bootcamp for Full-stack Web Development. I work at AvidXchange implementing software designed to
                    automate the accounts payable process. My hobbies include camping, comic books, video games, and going
                    to concerts with my wife.</p>
            </div>

        </div>
    )
}

export default AboutMe