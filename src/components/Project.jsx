import "tailwindcss/tailwind.css"
import { motion } from "framer-motion"

import dndquickImage from "../assets/images/dndquick.png";
import masterBuilderImage from "../assets/images/masterBuilder.png";
import employeeDatabaseImage from "../assets/images/employeeDatabase.png";
import socialNetworkApiImage from "../assets/images/socialnetworkapi.png";
import readmeGeneratorImage from "../assets/images/readmeGenerator.png";
import weatherDashboardImage from "../assets/images/weatherDashboard.png";
import theWebImage from "../assets/images/theWeb.png";

const projects = [
    {
        id: 1,
        name: "theWeb",
        description: "A social networking platform",
        image: theWebImage,
        deployedApp: "https://theweb-production.up.railway.app/",
        repo: "https://github.com/tmorgan-dev/theWeb",
    },
    {
        id: 2,
        name: "DND Quick",
        description: "An app for creating character sheets",
        image: dndquickImage,
        deployedApp: "https://jaredboehm.github.io/dnd-quick/",
        repo: "https://github.com/tmorgan-dev/dnd-quick",
    },
    {
        id: 3,
        name: "masterBuilder",
        description: "An app for tracking your LEGO collection",
        image: masterBuilderImage,
        deployedApp: "https://master-builder-production-40c9.up.railway.app/",
        repo: "https://github.com/tmorgan-dev/Master-Builder",
    },
    {
        id: 4,
        name: "employeeDatabase",
        description: "A CLI driven MySQL database",
        image: employeeDatabaseImage,
        deployedApp: "https://github.com/tmorgan-dev/employee-database",
        repo: "https://github.com/tmorgan-dev/employee-database",
    },
    {
        id: 5,
        name: "Social Network API",
        description: "MongoDB backend database",
        image: socialNetworkApiImage,
        deployedApp: "https://github.com/tmorgan-dev/social-network-api",
        repo: "https://github.com/tmorgan-dev/social-network-api",
    },
    {
        id: 6,
        name: "ReadMe Generator",
        description: "An CLI app for creating ReadMe.md files",
        image: readmeGeneratorImage,
        deployedApp: "https://github.com/tmorgan-dev/readme-generator",
        repo: "https://github.com/tmorgan-dev/readme-generator",
    },
    {
        id: 7,
        name: "Weather Dashboard",
        description: "5 Day Forecast for Any City",
        image: weatherDashboardImage,
        deployedApp: "https://tmorgan-dev.github.io/weather-dashboard/",
        repo: "https://github.com/tmorgan-dev/weather-dashboard",
    },
];

function Project() {
    return (
        <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <motion.div 
                animate={{ scale: 1 }} 
                initial={{ scale: 0 }}
                transition={{duration: .8 }}
                key={project.id} className="max-w-xs mx-3 my-3 bg-white rounded-md overflow-hidden shadow-md">
                    <img className="w-full h-64 object-cover" src={project.image} alt={project.name} />
                    <div className="p-4">
                        <h5 className="text-lg font-semibold">{project.name}</h5>
                        <p className="text-gray-700">{project.description}</p>
                        <div className="mt-4">
                            <a
                                href={project.deployedApp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                            >
                                Deployed App
                            </a>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Project;