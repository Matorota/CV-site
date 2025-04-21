import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[200px] bg-[#212A31] text-[#D3D9D4] flex flex-col items-center py-8">
      {/* Profile Section */}
      <div className="bg-[#124E66] text-white px-6 py-4 mb-8 w-full text-center">
        <h1 className="text-xl font-bold">Matas Štrimaitis</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 text-sm w-full text-center">
        <a href="#home" className="hover:text-[#124E66]">
          Home
        </a>
        <a href="#resume-about" className="hover:text-[#124E66]">
          About
        </a>
        <a href="#skills" className="hover:text-[#124E66]">
          Skills
        </a>
        <a href="#experience" className="hover:text-[#124E66]">
          Experience
        </a>
        <a href="#education" className="hover:text-[#124E66]">
          Education
        </a>
        <a href="#additional-info" className="hover:text-[#124E66]">
          Additional Info
        </a>
        <a href="#contact" className="hover:text-[#124E66]">
          Contacts
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex space-x-4 mt-auto mb-4">
        <a href="#" className="text-[#124E66] text-lg">
          <FaFacebook />
        </a>
        <a href="#" className="text-[#124E66] text-lg">
          <FaTwitter />
        </a>
        <a href="#" className="text-[#124E66] text-lg">
          <FaGoogle />
        </a>
      </div>

      <p className="text-xs text-center text-[#D3D9D4]">
        &copy; Matas Štrimaitis. All rights reserved.
      </p>
    </div>
  );
}