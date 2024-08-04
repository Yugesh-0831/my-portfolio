import tokyoFlares from "../Assests/tokyo-flares.png";
import sociauxHub from "../Assests/sociaux-hub.png";
import falconAirlines from "../Assests/falcon-airlines.png";

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="bg-[#f1f0eb] lg:bg-[#FAF9F6] text-black 2xl:h-[80vh] pb-5"
      >
        <p className="sm:text-center pt-10 text-black text-4xl font-light text-center">
          Selected Works
        </p>
        <div className="pt-16 px-28 text-center">
          <div className="flex flex-col lg:flex-row justify-between list-none mt-12">
            <a
              className="transition-transform duration-200 ease-in-out hover:scale-105 mb-10 mx-auto"
              href="https://github.com/Yugesh-0831/tokyo-flares"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="rounded-lg h-64 w-64" src={tokyoFlares} />
              <p className="mt-7 text-black font-light text-2xl">
                Tokyo Flares
              </p>
              <p className="mt-3 text-black font-light text-lg text-opacity-60">
                E-Commerce Website
              </p>
            </a>
            <a
              className="transition-transform duration-200 ease-in-out hover:scale-105 mb-10 mx-auto"
              href="https://github.com/Yugesh-0831/Sociaux-Hub"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="rounded-lg h-64 w-64" src={sociauxHub} />
              <p className="mt-7 text-black font-light text-2xl">Sociaux Hub</p>
              <p className="mt-3 text-black font-light text-lg text-opacity-60">
                Social Media Website
              </p>
            </a>
            <a
              className="transition-transform duration-200 ease-in-out hover:scale-105 mb-10 mx-auto"
              href="https://github.com/Yugesh-0831/falcon-airlines-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt=""
                className="rounded-lg h-64 w-64"
                src={falconAirlines}
              />
              <p className="mt-7 text-black font-light text-2xl">
                Falcon Airlines
              </p>
              <p className="mt-3 text-black font-light text-lg text-opacity-60">
                Airlines Website
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
