import Experience from "../components/Experience";
import { BsFillMoonStarsFill, } from "react-icons/bs";
import React, { useState } from "react";

function ExperiencePaage(){
    const [darkMode, setDarkMode] = useState(false);
return(
    <div className={darkMode ? "dark" : ""}>
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
            <h3 className="text-3xl py-1 dark:text-white font-burtons">Professional Experience</h3>
            
           <Experience  />
          </section>           

     
        </main>
      </div>

    </div>


  </div>
);
}

export default ExperiencePaage;