import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[200px] bg-black text-white flex flex-col items-center py-8">
      <div className="bg-yellow-400 text-black px-6 py-4 mb-8 w-full text-center">
        <h1 className="text-xl font-bold">Matas Štrimaitis</h1>
      </div>

      <nav className="flex flex-col space-y-4 text-sm w-full text-center">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#resume-about" className="hover:text-yellow-400">
          About
        </a>
        <a href="#skills" className="hover:text-yellow-400">
          Skills
        </a>
        <a href="#experience" className="hover:text-yellow-400">
          Experience
        </a>
        <a href="#education" className="hover:text-yellow-400">
          Education
        </a>
        <a href="#portfolio" className="hover:text-yellow-400">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
        <a href="#blog" className="hover:text-yellow-400">
          Blog
        </a>
      </nav>

      <div className="flex space-x-4 mt-auto mb-4">
        <a href="#" className="text-yellow-400 text-lg">
          <FaFacebook />
        </a>
        <a href="#" className="text-yellow-400 text-lg">
          <FaTwitter />
        </a>
        <a href="#" className="text-yellow-400 text-lg">
          <FaGoogle />
        </a>
      </div>

      <p className="text-xs text-center">&copy; Matas Štrimaitis. All rights reserved.</p>
    </div>
  );
}