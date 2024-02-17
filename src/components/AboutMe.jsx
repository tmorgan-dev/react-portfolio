import React from 'react'
// Importing profile picture
import profilePic from "../assets/images/profile.jpg"
// Importing motion from Framer Motion library for animations
import { motion } from "framer-motion"

// Functional component for the About Me section
const AboutMe = () => {
    return (
        <div className="aboutMe flex items-center">
            <div className="divWrapper">
                <motion.img 
                    animate={{ scale: 1 }} 
                    initial={{ scale: 0 }}
                    transition={{ duration: .8, delay: 1 }}
                    src={profilePic} className="max-w-full h-auto" alt="Profile" />
            </div>
            <div className="content ml-4 text-white text-lg">
                <motion.p 
                animate={{ y: 0 }}
                initial={{ y: -500 }}
                transition={{ duration: 1 }}>
                    I live in Bountiful, Utah with my wife and son. 
                    I work at AvidXchange implementing software designed to automate the accounts payable process. 
                    I am also a full stack web developer, specializing in small business. 
                    Click on Portfolio to see some of my work. 
                    Click on Contact to send an email to me directly. 
                    Click on Resume to view and download a copy of my resume.
                </motion.p>
            </div>
        </div>
    )
}

export default AboutMe