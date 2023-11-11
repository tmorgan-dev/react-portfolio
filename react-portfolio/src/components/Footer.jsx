import '../styles/Footer.css';
import emailIcon from "../assets/images/mail.png"
import gitHubIcon from "../assets/images/github.png"
import linkedInIcon from "../assets/images/linkedin.png"
import stackOverflowIcon from "../assets/images/stackoverflow.png"

function Footer() {
    return (
        <div className="footer">
            <a href="mailto:tmorgan-dev-2023@gmail.com">
                <img src={emailIcon} alt="Email Icon" />
            </a>
            <a href="https://github.com/tmorgan-dev">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/timlinkedin/">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://stackoverflow.com/users/22895754/tim-morgan">
                <img src={stackOverflowIcon} alt="StackOverflow Icon" />
            </a>
        </div>
    );
}

export default Footer;