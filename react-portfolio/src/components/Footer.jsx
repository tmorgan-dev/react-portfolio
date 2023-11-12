import gitHubIcon from "../assets/images/github.png"
import linkedInIcon from "../assets/images/linkedin.png"
import stackOverflowIcon from "../assets/images/stackoverflow.png"

function Footer() {
    return (
        <div className="footer flex items-center justify-center space-x-4">
            <a href="https://github.com/tmorgan-dev" className="w-24 h-24 bg-white p-2 rounded-full">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/timlinkedin/" className="w-24 h-24 bg-white p-2 rounded-full">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://stackoverflow.com/users/22895754/tim-morgan" className="w-24 h-24 bg-white p-2 rounded-full">
                <img src={stackOverflowIcon} alt="StackOverflow Icon" />
            </a>
        </div>
    );
}

export default Footer;