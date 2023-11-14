import gitHubIcon from "../assets/images/github.png"
import linkedInIcon from "../assets/images/linkedin.png"
import stackOverflowIcon from "../assets/images/stackoverflow.png"

function Footer() {
    return (
        <div className="footer flex flex-wrap items-center justify-center bg-gray-400 space-x-4 p-4">
            <a href="https://github.com/tmorgan-dev" className="w-20 h-20 bg-white p-2 rounded-full">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/timlinkedin/" className="w-20 h-20 bg-white p-2 rounded-full">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://stackoverflow.com/users/22895754/tim-morgan" className="w-20 h-20 bg-white p-2 rounded-full">
                <img src={stackOverflowIcon} alt="StackOverflow Icon" />
            </a>
        </div>
    );
}

export default Footer;