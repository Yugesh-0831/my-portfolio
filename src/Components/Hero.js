import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import heroImg from "../Assests/hero-img.png";
import Resume from "../Assests/YugeshResume.pdf";

function Hero() {
  return (
    <>
      <div className="bg-[#FAF9F6] text-black lg:h-[50vh] h-[100vh]">
        <div className="flex flex-col sm:flex-row justify-between py-3 px-10 text-black font-light">
          <div className="flex items-center">
            <MdOutlineEmail />
            <a href="mailto:yugeshjhamb0831@gmail.com" className="ml-2">
              yugeshjhamb0831@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/yugeshjhamb0731/"
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              Instagram
            </a>
            <p>/</p>
            <a
              href="https://github.com/Yugesh-0831"
              target="_blank"
              rel="noreferrer"
              className="mr-2 ml-2"
            >
              Github
            </a>
            <p>/</p>
            <a
              href="https://www.linkedin.com/in/yugesh-jhamb-494924204/"
              target="_blank"
              rel="noreferrer"
              className="ml-2"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="mt-14 mb-2 flex justify-between flex-col lg:flex-row">
          <div className="">
            <img className="w-40 h-25" src={heroImg} alt="" />
            <p className="ml-10 text-4xl max-w-[300px] text-black">
              Hello! I'm Yugesh Jhamb
            </p>
          </div>
          <div className="mt-8 lg:mt-0 ml-10 max-w-[600px]">
            <p className="mt-5 text-4xl text-black font-light">
              A Software Developer based in Gurugram, India
            </p>
            <p className="mt-5 text-black text-opacity-50 font-light">
              Passionate creating software products
            </p>
            <a href={Resume} download>
              <button className="border border-black bg-black text-white p-2 mt-5 rounded-lg h-10 w-28">
                Resume
              </button>
            </a>
            <button
              className="border border-black text-black p-2 mt-5 rounded-lg h-10 w-28 ml-5"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See my work
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
