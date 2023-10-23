
import React, { useState } from "react";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineUser, AiOutlineWallet,
  AiFillApi, AiOutlineRead, AiOutlineTrophy
} from "react-icons/ai";
import {
  SlPencil, 
} from "react-icons/sl";
import { BsFillMoonStarsFill, } from "react-icons/bs";
import Skills from "./components/skills";
import Projects from './components/Projects';
import Experience from "./components/Experience";
import Education from "./components/Education";
import './App.css';
import deved from "./png/avatar.png";
import control from "./png/control.png";
import logo from "./png/logo.png";



const Menus = [

  { title: "Dashboard", alt: "#lession1", icon: AiOutlineUser },
  { title: "about me", alt: "#lession2", icon: AiFillApi },
  { title: "Skills", alt: "#lession3", icon: AiOutlineWallet },
  { title: "Experience", alt: "#lession4", icon: AiOutlineTrophy },
  { title: "work", alt: "#lession6", icon: SlPencil },
  { title: "Education", alt: "#lession5", icon: AiOutlineRead },
];


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(true);

  const clasName = `${open ? "w-70" : "w-20 "} bg-gradient-to-r from-cyan-500 to-sky-800 text-white px-4 py-2 border-none rounded-md ms-2 relative`;


  return (

    <div className={darkMode ? "dark" : ""}>
      <div className="flex">
      <div className={clasName} >

          <img src={control} className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}  `}
            onClick={() => setOpen(!open)} alt="hi in my portfolio"
          />

          <div className="flex gap-x-4 items-center">

            <img
              src={logo}
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                }`}  alt="logo"
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0" }`}  >
              Devloper
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (

              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                  } `}
              >
                <a href={`${Menu.alt}`}>
                  <div>
                    {React.createElement(Menu?.icon, { size: "20" })}
                  </div>
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>

        </div>

        <div className="h-screen flex-1 p-7 text-x1 text-gray-900 ">
          <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
            <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">Tarek Jamous</h1>
                <ul className="flex items-center">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className=" cursor-pointer text-2xl"
                    />
                  </li>
                  <li id="lession1">

                    <a
                      className="bg-gradient-to-r from-cyan-500 text- to-sky-800 text-white px-4 py-2 border-none rounded-md ml-8"
                      href="https://t-r-q.github.io/CVProject/"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-sky-700 font-medium dark:text-teal-400 md:text-6xl">
                  Tarek Jamous
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                  Software Engineer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
                  Software Engineer with a deep-seated passion for both programming and design. My skill set encompasses a robust foundation in programming languages,
                  comprehensive understanding of software development methodologies, proficiency in data structures and algorithms, adeptness in software design.
                  My unwavering commitment lies in utilizing my knowledge and skills to address a wide spectrum of challenges in the digital realm, with the ultimate goal
                  of transforming your innovative ideas into tangible reality.
                </p>
                <h3 className="font-burtons text-xl text-sky-600">  Have a project in mind? Let's make it happen. Contact me today!</h3>
                <div className="text-5xl flex justify-center gap-11 py-3 text-sky-600 dark:text-gray-400">
                  
                  <a href="mailto:trqjms@gmail.com" id="lession2"> <AiFillMail /></a>
                  <a href="https://www.linkedin.com/in/tarek-jamous-engineer/" >  <AiFillLinkedin /> </a>
                  <a href="https://github.com/t-r-q" >  <AiFillGithub /></a>
                </div>

                <div className="mx-auto bg-gradient-to-b to-sky-900 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-66 md:w-96">
                <img src={deved} layout="fill" objectfit="cover" alt="Headshot of a person with short hair." />
                </div>
              </div>
            </section>
            <section >
             <Skills />
            </section>

            <section>
              <div id="lession6">
                <div className=" bg-gradient-to-r from-cyan-500 to-sky-800  py-24 sm:py-32">
                <Projects />
                </div>
              </div>
            </section>


            <section className="py-10">
              <div id="lession4">               
              <h3 className="text-3xl py-1 dark:text-white font-burtons">Professional Experience</h3>
              </div>
             <Experience  />
            </section>


            <section className="py-10">
              <div id="lession5">
                <h3 className="text-3xl py-1 dark:text-white font-burtons">Education</h3>
              </div>
           
             <Education />
            </section>
          </main>
        </div>

      </div>


    </div>
  );
}

export default App;
