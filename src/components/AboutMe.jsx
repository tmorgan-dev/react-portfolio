import React from 'react';
import profilePic from "../assets/images/profile.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:order-2 mb-4 md:mb-0 md:mr-4"> {/* Wrapper div for the image */}
                <motion.img
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: .7, delay: 1 }}
                    src={profilePic} className="w-auto h-auto" alt="Profile" />
            </div>
            <div className="content text-white text-lg flex-1 md:order-1">
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
    );
}

export default AboutMe;