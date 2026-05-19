import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiSocketdotio, SiMongodb, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-center justify-between">
          {/* Project / Company Info */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              TanviTech Pvt. Ltd.
            </h3>
            <p className="text-sm">
              Developer: <strong>Ram Prashad Mahato</strong> <br />
              Full Stack Developer Intern – E-Learning Platform Project.
            </p>
            <p className="text-sm mt-2">
              Building innovative, scalable, and real-time learning solutions for the next generation of education.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="w-full md:w-1/3 mb-6 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-3 text-center text-yellow-400">
              Technologies Used
            </h4>
            <ul className="list-none space-y-3">
              <li className="flex items-center space-x-2">
                <FaReact />
                <span>React.js (Frontend)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaNodeJs />
                <span>Node.js & Express (Backend)</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiMongodb />
                <FaDatabase />
                <span>MongoDB (Database)</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiSocketdotio />
                <span>Socket.io (Real-Time Notifications)</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <span>Web Fundamentals</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              Contact & Links
            </h4>
            <p className="text-sm">
              Email:{" "}
              <span className="text-yellow-300">info@tanvitech.com.np</span>
            </p>
            <p className="text-sm">Phone: +977-9841-XXXXXX</p>
            <p className="text-sm">Address: Kathmandu, Nepal</p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-5">
              <a
                href="https://facebook.com/tanvitech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/tanvitech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/tanvitech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-600" />

        {/* Footer Bottom */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} TanviTech Pvt. Ltd. — E-Learning
          Platform. All rights reserved. <br />
          Developed by <span className="text-yellow-400 font-semibold">Ram Prashad Mahato</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
