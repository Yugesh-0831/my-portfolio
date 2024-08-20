function Experience() {
  return (
    <>
      <div className="mx-auto md:ml-14">
        <p className="text-black text-4xl font-light">Working Experience</p>
        <ul className="list-none mt-12">
          <li className="flex items-center">
            <img
              alt=""
              className="h-11 w-12 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtKdHuYy2yCuP2WGwhSy5_LWPdv8gWq9coQ&s"
            />
            <div className="ml-3">
              <p>SDE Intern at Fourkites</p>
              <p className="text-sm text-black text-opacity-50">
                June 2023 - May 2024
              </p>
            </div>
          </li>
          <hr className="max-w-[450px] my-7 border-black border-opacity-10" />
          <li className="flex items-center">
            <img
              alt=""
              className="h-11 w-12  rounded-lg"
              src="https://mma.prnewswire.com/media/1232343/Coforge_Logo.jpg?p=twitter"
            />
            <div className="ml-3">
              <p>SDE Intern at Coforge</p>
              <p className="text-sm text-black text-opacity-50">
                June 2022 - July 2022
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
