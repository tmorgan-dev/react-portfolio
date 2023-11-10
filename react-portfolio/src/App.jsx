import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

import dndquickImage from "./assets/images/dndquick.png";
import masterBuilderImage from "./assets/images/masterBuilder.png";
import employeeDatabaseImage from "./assets/images/employeeDatabase.png";
import socialNetworkApiImage from "./assets/images/socialnetworkapi.png";
import readmeGeneratorImage from "./assets/images/readmeGenerator.png";
import weatherDashboardImage from "./assets/images/weatherDashboard.png";

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

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Project projects={projects} />
      <Footer />
    </div>
  );
}

export default App
