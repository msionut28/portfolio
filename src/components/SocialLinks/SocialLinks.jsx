import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { contactInfo } from '../../data/content';
import './style.css'

const SocialLinks = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {contactInfo.github && (
          <li>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {contactInfo.linkedin && (
          <li>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Get In Touch</p>
    </div>
  );
};

export default SocialLinks;
