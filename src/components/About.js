import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white cursor-default">
            Hi, I'm Matt!
          </h1>
          <p className="mb-8 leading-relaxed cursor-default">
            I'm a third year <span className="text-white">Computer Science major</span> and <span className="text-white">Math minor</span> at <span className="text-red-500">Northeastern University</span> with a concentration in <span className="text-white">Artificial Intelligence</span>.
            I have much experience working on collaborative design projects through work, school, and extracurriculars.
            Please look around at some of my past work and experiences, and reach out if you have any opportunities you think I'd be a good fit for!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./boston-clipart.png"
          />
        </div>
      </div>
    </section>
  );
}
