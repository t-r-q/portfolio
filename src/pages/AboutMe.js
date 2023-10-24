import React, { useState } from "react";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import '../App.css';
import deved from "../png/avatar.png";
import { BsFillMoonStarsFill, } from "react-icons/bs";

const Aboutme = () =>{
  const [darkMode, setDarkMode] = useState(false);

return  ( <div className={darkMode ? "dark" : ""}>
<div className="flex">
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
            <li>

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

 
    </main>
  </div>

</div>


</div>
);

};


export default Aboutme;