import React from 'react'

import '../App.css';
import code from "../png/code.png";
import consulting from "../png/consulting.png";
import dsg1 from "../png/design1.png";
import test from "../png/test.png";
import program from "../png/programing.png";
import plan from "../png/plan.png";
import dbase from "../png/db.png";
import web3 from "../png//web3.png";


export default function skills() {
  return (
    <div>
          <section >
                <div>
                  <h3 className="text-3xl py-1 dark:text-white ">My Skills</h3>
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
                    <img src={plan} width={250} height={150} alt="Agile Methodology"/>
                    <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
                      Agile Methodology
                    </h3>                 
                    <h4 className=" text-teal-600">Kanban -  Scrum</h4>
                   
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <img src={dsg1} width={110} height={110} alt="Artificial Intelligence "/>
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
                    <img src={consulting} width={100} height={100} alt="Frameworks"/>
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Frameworks</h3>
                    <p className="py-2">


                    </p>
                    <h4 className="py-4 text-teal-600">Reactive RxJava, Gradle, React, Angular, .NET, Nodejs</h4>
                    
                  </div>
                  
                </div>
                <div className="lg:flex gap-10">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                    <img src={web3} width={190} height={190} alt="distributed version control system"/>
                    <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
                    DCVS
                    </h3>                 
                    <h4 className=" text-teal-600">Bitbucket - GitHub - Git</h4>
                    <p className="text-gray-800 py-1">
                    

                    </p>
                   
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <img src={program} width={110} height={110} alt="Operating Systems"/>
                    <h3 className="text-lg font-medium pt-8 pb-2 text-sky-800">
                    Operating Systems
                    </h3>
                    <h4 className="py-4 text-teal-600">Linux/Unix - Windows</h4>
                    <p className="py-2">
                    
                    </p>
                    
     
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <img src={code} width={100} height={100} alt="Programming"/>
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Programming Languages</h3>

                    <h4 className="py-4 text-teal-600">C++, C#, CSS, Java, JavaScript ES,  Python, HTML5, Shell Scripting</h4>

                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <img src={test} width={100} height={100} alt="Testing"/>
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Software Testing</h3>
                    <p className="py-2">


                    </p>
                    <h4 className="py-4 text-teal-600">Manual testing, Test automation</h4>
                    
                  </div>
                  
                </div>
              </section>

    </div>
  )
}
