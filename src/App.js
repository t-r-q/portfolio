
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
//import skills from "./components/skills.js";
//import experi from "./components/Experience.js";
//import Projects from "./components/Projects.js";
import './App.css';
import deved from "./png/avatar.png";
import code from "./png/code.png";
import consulting from "./png/consulting.png";
import dsg1 from "./png/design1.png";
import test from "./png/test.png";
import program from "./png/programing.png";
import plan from "./png/plan.png";
import dbase from "./png/db.png";
import web3 from "./png//web3.png";
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
              <div>
                
                <h3 className="text-4xl py-1 dark:text-white font-burtons" id="lession3">My Skills</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Experienced in Agile Methodology for on-time, budget-friendly software project deliveries.
                  Proficient in Scrum, Kanban, and adaptable to project and team requirements.
                  Structured and collaborative project management with a focus on flexibility,
                  efficiency, and high-quality outcomes.

                  I have experience developing and deploying AI agents to solve complex problems in a variety of domains.
                  I am proficient in using a variety of AI techniques, I'm well-equipped to harness the power of
                  artificial intelligence to address complex problems and drive innovative solutions.



                </p>
              </div>
              <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                  <img src={plan} width={250} height={150} alt="Agile Methodology" />
                  <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
                    Agile Methodology
                  </h3>
                  <h4 className=" text-teal-600">Kanban -  Scrum</h4>

                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={dsg1} width={110} height={110} alt="Artificial Intelligence " />
                  <h3 className="text-lg font-medium pt-8 pb-2 text-sky-800">
                    Artificial Intelligence
                  </h3>
                  <h4 className="py-4 text-teal-600">AI Agent, Regression,  Machine Learning</h4>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={dbase} width={100} height={100} alt="Database" />
                  <h3 className="text-lg font-medium pt-8 pb-2 ">Database</h3>
                  <p className="py-2">

                  </p>
                  <h4 className="py-4 text-teal-600">MongoDB,  SQL Server,  PostgreSQL</h4>

                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={consulting} width={100} height={100} alt="Frameworks" />
                  <h3 className="text-lg font-medium pt-8 pb-2 ">Frameworks</h3>
                  <p className="py-2">


                  </p>
                  <h4 className="py-4 text-teal-600">Reactive RxJava, Gradle, React, Angular, .NET, Nodejs</h4>

                </div>

              </div>
              <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                  <img src={web3} width={190} height={190} alt="distributed version control system" />
                  <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
                    DCVS
                  </h3>
                  <h4 className=" text-teal-600">Bitbucket - GitHub - Git</h4>
                  <p className="text-gray-800 py-1">


                  </p>

                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={program} width={110} height={110} alt="Operating Systems" />
                  <h3 className="text-lg font-medium pt-8 pb-2 text-sky-800">
                    Operating Systems
                  </h3>
                  <h4 className="py-4 text-teal-600">Linux/Unix - Windows</h4>
                  <p className="py-2">

                  </p>


                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={code} width={100} height={100} alt="Programming" />
                  <h3 className="text-lg font-medium pt-8 pb-2 ">Programming Languages</h3>

                  <h4 className="py-4 text-teal-600">C++, C#, CSS, Java, JavaScript ES,  Python, HTML5, Shell Scripting</h4>

                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <img src={test} width={100} height={100} alt="Testing" />
                  <h3 className="text-lg font-medium pt-8 pb-2 ">Software Testing</h3>
                  <p className="py-2">


                  </p>
                  <h4 className="py-4 text-teal-600">Manual testing, Test automation</h4>

                </div>

              </div>
            </section>
            <section>
              <div id="lession6">
                <div className="bg-white py-24 sm:py-32">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <h2 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-burtons" > My Projects</h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        My work on projects involves a combination of creativity and technical prowess. I take pride in translating concepts into tangible solutions,
                        using my expertise in softwaare developing to make it happen. With a detail-oriented approach,
                        I'm committed to delivering results that not only meet but often exceed expectations.
                        I take a structured and methodical approach to each project, always ensuring efficiency, quality, and innovation.
                        I'm passionate about creating solutions that make a positive impact and leave a lasting impression.
                        I look forward to sharing my project portfolio with you, which showcases my journey and dedication to softwaare developing. Let's explore the possibilities together.
                      </p>
                    </div>
                   
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                      <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Project MunamiiCakery Website</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                        The client Munamii Cakery has a cupcake and wedding cake shop where she sells cupcakes and wedding cakes. She is interested in having a website to have a more formal presence on the web, where she can customize how she presents the information to her clients.
                        </p>

                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">HTML5, CSS3, JavaScript Languages</h4>

                      </div>
                      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                          <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600">photo</p>

                            <a
                              href="https://github.com/t-r-q/Munamii-Cakery/tree/main"
                              className="mt-10 block w-full rounded-md bg-gradient-to-r from-cyan-500 text- to-sky-800  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Get access
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
                      <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Project MoneyTracking</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          The project was developed using C#. The main objective was to create a comprehensive banking system where users could effortlessly open new accounts as bank customers.
                          Once registered, users had the flexibility to manage multiple bank accounts, enabling them to deposit and withdraw funds while recording important transaction details,
                          including asset values, purchase dates, and prices.
                        </p>

                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">C# language</h4>

                      </div>
                      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                          <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600">photo</p>

                            <a
                              href="https://github.com/t-r-q/MoneyTracking"
                              className="mt-10 block w-full rounded-md bg-gradient-to-r from-cyan-500 text- to-sky-800  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Get access
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                      <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Project Todo List</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          The primary objective of this project to creating a task management system.
                          The application allowed users to model tasks with key attributes. Users could efficiently organize their tasks by sorting, add new tasks, edit existing ones, or remove tasks as needed.
                          One of the noteworthy features of the application was the ability to load and save task lists to and from a file, ensuring data persistence and enhancing user convenience.
                        </p>
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">C# language</h4>
                      </div>
                      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                          <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600">photo</p>

                            <a
                              href="https://github.com/t-r-q/TodoListApp"
                              className="mt-10 block w-full rounded-md bg-gradient-to-r from-cyan-500 text- to-sky-800  py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Get access
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                      <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Project Dialer Mobile</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          The Dialer application is a comprehensive app that replicates the functionality of a traditional phone keypad.
                          It offers multiple activities, including: Entering the number to call, viewing previously dialed numbers,
                          changing the keypad settings, viewing a map of where previous calls have been made.
                        </p>

                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Java language</h4>

                      </div>
                      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                          <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600">photo</p>

                            <a
                              href="https://github.com/t-r-q/androidDailer"
                              className="mt-10 block w-full rounded-md bg-gradient-to-r from-cyan-500 text- to-sky-800  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Get access
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div id="lession4">

                <h3 className="text-3xl py-1 dark:text-white ">Professional Experience</h3>

              </div>
              <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">

                  <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
                    .Net Developer
                  </h3>  <p className="py-1">Lexicon. 2023 Sep &mdash; present | Malmö</p>
                  <h4 className=" text-sky-900">Developed solutions for Microsoft Azure using C# and .NET Framework. Worked with a team of developers to design, develop, and test software applications, implementing agile development methodologies.</h4>

                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <h3 className="text-lg font-medium pt-8 pb-2 text-sky-800">
                    System Developer
                  </h3><p className="py-1">
                    Tillväxrverket. 2018 Apr &mdash; 2018 Oct | Östersund,
                  </p>
                  <h4 className="py-4  text-sky-900">
                    Design, develop, and maintain software applications that interact with external APIs
                    Use the C# language and .NET framework to develop and implement user interfaces for displaying data
                    Write clean, efficient, and well-documented code

                  </h4>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <h3 className="text-lg font-medium pt-8 pb-2 ">IT Support</h3>
                  <p className="py-1">
                    HIBA, University of Business Administration Damascus. 2012 Mar &mdash; 2013 Sep | Damascus
                  </p>
                  <h4 className="py-4  text-sky-900">Provide technical support to students, including troubleshooting and resolving hardware, software, and network issues
                    Install, configure, and maintain computer systems, software, and peripherals. Monitor and maintain the university’s IT infrastructure, including servers, networks, and security systems</h4>

                </div>
              </div>
            </section>


            <section className="py-10">
              <div id="lession5">
                <h3 className="text-3xl py-1 dark:text-white ">Education</h3>


              </div>
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">


                <div className="basis-1/3 flex-1">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Bachelor of Science in Computer Engineering</h3>
                    <p className="py-1">
                      Mid Sweden University Sweden <br />
                      2019 Sep – 2023 Feb | Östersund, Sweden
                    </p>
                    <h4 className="py-4  text-sky-900">
                      Discrete mathematics, Design Patterns, Object-Oriented Programming
                      System Development, Web Development and Databases
                      Testing, Reactive RxJava and AI Agent
                    </h4>
                  </div>
                </div>

                <div className="basis-1/3 flex-1">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Advanced Diploma in Software Engineering</h3>
                    <p className="py-1">
                      Aptech Computer Education <br />
                      2009 Sep – 2012 Jun | Syria
                    </p>
                    <h4 className="py-4  text-sky-900">
                      Java, C#, ASP.NET, JavaScript.
                      Software project management in MS Project, Object Analysis and Design.
                      Working with Linux OS, Apache web server and databases.
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

      </div>


    </div>
  );
}

export default App;
