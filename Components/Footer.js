import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-50 text-sm text-center sm:text-left">
            © {year} Byte-Beats
            <a
              href="https://www.linkedin.com/in/jay-nandwana-india/"
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              @Jay Nandwana
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="text-gray-50"
              href="mailto:jaynandwana2018@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillMail />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/feed/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
            {/* <a
              className="ml-4 text-gray-50"
              href="https://www.instagram.com/soumyajit4419/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiInstagram />
            </a> */}
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/in/jay-nandwana-india/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
