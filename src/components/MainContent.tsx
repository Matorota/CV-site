import { useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import cvFile from "../assets/Matas_Strimaitis_CV.pdf"; 

interface MainContentProps {
  activeSection: string;
}

export default function MainContent({ }: MainContentProps) {
  const images = [img1, img2]; 
  const [currentImage, setCurrentImage] = useState(0); 

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); 
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); 
  };

  return (
    <div className="ml-[200px] flex flex-col h-screen w-full overflow-y-auto bg-[#212A31]">
      <section
        id="home"
        className="snap-start flex-shrink-0 w-full h-screen bg-cover text-white p-4 md:p-8 flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#2E3944] bg-opacity-80 p-4 md:p-5 rounded-lg max-w-[90%] md:max-w-[50%]">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#D3D9D4]">
            Hello, I'm Matas Štrimaitis
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 text-[#D3D9D4]">
            Front-End Developer / UX Designer
          </p>
          <a
            href={cvFile}
            download="Matas_Strimaitis_CV.pdf"
            className="bg-[#124E66] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#748D92]"
          >
            Download CV
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={handlePrevImage}
            className="bg-[#2E3944] bg-opacity-80 text-white px-4 py-2 rounded-full hover:bg-opacity-100"
          >
            Prev
          </button>
          <button
            onClick={handleNextImage}
            className="bg-[#2E3944] bg-opacity-80 text-white px-4 py-2 rounded-full hover:bg-opacity-100"
          >
            Next
          </button>
        </div>
      </section>

      <section
        id="resume-about"
        className="snap-start flex-shrink-0 w-full h-screen bg-[#2E3944] p-4 md:p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D3D9D4]">
          Resume & About
        </h2>
        <div className="text-[#D3D9D4]">
          <p>
            <strong>Matas Štrimaitis</strong>
            <br />
            Dociskių g. 5-59, LT-06154 Vilnius
            <br />
            <strong>Phone:</strong> +370 602 64827
            <br />
            <strong>Email:</strong> matasmatsp@gmail.com
            <br />
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Matorota" className="text-[#124E66]">
              Matorata
            </a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/matas-%C5%A1trimaitis-9aa953186/"
              className="text-[#124E66]"
            >
              Matas Štrimaitis
            </a>
          </p>
          <h3 className="text-2xl font-bold mt-6 text-[#D3D9D4]">About Me</h3>
          <p>
            I am a front-end developer passionate about creating user-friendly
            and visually appealing web applications. I specialize in modern
            technologies like React, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="snap-start flex-shrink-0 w-full h-screen bg-[#124E66] p-4 md:p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D3D9D4]">
          Skills
        </h2>
        <ul className="list-disc ml-6 text-[#D3D9D4]">
          <li>JavaScript, TypeScript, React.js, Vue.js, CSS/Tailwind</li>
          <li>MySQL, MongoDB, FastAPI</li>
          <li>Git, GitHub, Docker, Figma, Adobe Photoshop</li>
        </ul>
      </section>
    </div>
  );
}