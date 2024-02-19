import gitHubIcon from "../assets/images/github.png"
import linkedInIcon from "../assets/images/linkedin.png"
import stackOverflowIcon from "../assets/images/stackoverflow.png"

function Footer() {
    return (
        <footer className="footer bg-gray-400 py-auto fixed bottom-0 left-0 right-0">
            <div className="flex flex-wrap items-center justify-center space-x-4 p-4">
                <a href="https://github.com/tmorgan-dev" className="w-10 h-10 bg-white p-2 rounded-full">
                    <img src={gitHubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/timlinkedin/" className="w-10 h-10 bg-white p-2 rounded-full">
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://stackoverflow.com/users/22895754/tim-morgan" className="w-10 h-10 bg-white p-2 rounded-full">
                    <img src={stackOverflowIcon} alt="StackOverflow Icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;