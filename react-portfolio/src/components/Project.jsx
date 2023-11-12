import "tailwindcss/tailwind.css"

import dndquickImage from "../assets/images/dndquick.png";
import masterBuilderImage from "../assets/images/masterBuilder.png";
import employeeDatabaseImage from "../assets/images/employeeDatabase.png";
import socialNetworkApiImage from "../assets/images/socialnetworkapi.png";
import readmeGeneratorImage from "../assets/images/readmeGenerator.png";
import weatherDashboardImage from "../assets/images/weatherDashboard.png";

const projects = [
    {
        id: 1,
        name: "DND Quick",
        description: "An app for creating character sheets",
        image: dndquickImage,
        deployedApp: "https://jaredboehm.github.io/dnd-quick/",
        repo: "https://github.com/tmorgan-dev/dnd-quick",
    },
    {
        id: 2,
        name: "masterBuilder",
        description: "An app for tracking your LEGO collection",
        image: masterBuilderImage,
        deployedApp: "https://master-builder-production-40c9.up.railway.app/",
        repo: "https://github.com/tmorgan-dev/Master-Builder",
    },
    {
        id: 3,
        name: "employeeDatabase",
        description: "A CLI driven MySQL database for managing employees",
        image: employeeDatabaseImage,
        deployedApp: "https://github.com/tmorgan-dev/employee-database",
        repo: "https://github.com/tmorgan-dev/employee-database",
    },
    {
        id: 4,
        name: "Social Network API",
        description: "A back end database for a social network built with MongoDB",
        image: socialNetworkApiImage,
        deployedApp: "https://github.com/tmorgan-dev/social-network-api",
        repo: "https://github.com/tmorgan-dev/social-network-api",
    },
    {
        id: 5,
        name: "ReadMe Generator",
        description: "An CLI app for creating ReadMe.md files",
        image: readmeGeneratorImage,
        deployedApp: "https://github.com/tmorgan-dev/readme-generator",
        repo: "https://github.com/tmorgan-dev/readme-generator",
    },
    {
        id: 6,
        name: "Weather Dashboard",
        description: "An app to quickly get the current weather and 5 day forecast using OpenWeather API",
        image: weatherDashboardImage,
        deployedApp: "https://tmorgan-dev.github.io/weather-dashboard/",
        repo: "https://github.com/tmorgan-dev/weather-dashboard",
    },
];

function Project() {
    return (
        <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <div key={project.id} className="max-w-xs mx-4 my-4 bg-white rounded-md overflow-hidden shadow-md">
                    <img className="w-full h-32 object-cover" src={project.image} alt={project.name} />
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
                </div>
            ))}
        </div>
    );
}

export default Project;