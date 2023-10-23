import React from 'react'
import Skill from './skill'
import '../App.css';
import code from "../png/code.png";
import consulting from "../png/consulting.png";
import dsg1 from "../png/design1.png";
import test from "../png/test.png";
import program from "../png/programing.png";
import plan from "../png/plan.png";
import dbase from "../png/db.png";
import web3 from "../png//web3.png";


const skills = () => {
  return (
    <div>
         
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
              <Skill myimg={plan} width={250} height={150} title={"Agile Methodology"} detail={"Kanban -  Scrum"} />
              
              <Skill myimg={dsg1} width={110} height={110} title={"Artificial Intelligence"} detail={"AI Agent, Regression,  Machine Learning"} />
               
              <Skill myimg={dbase} width={100} height={100} title={"Database"} detail={"MongoDB,  SQL Server,  PostgreSQL"} />

              <Skill myimg={consulting} width={100} height={100}  title={"Frameworks"} detail={"Reactive RxJava, Gradle, React, Angular, .NET, Nodejs"} />
              </div> 
              <div className="lg:flex gap-10">
              <Skill myimg={web3} width={190} height={190} title={"DCVS"} detail={"Bitbucket - GitHub - Git"} />

              <Skill myimg={program} width={110} height={110} title={"Operating Systems"} detail={"Linux/Unix - Windows"} />
              <Skill myimg={code}  width={100} height={100} title={"Programming Languages"} detail={"C++, C#, CSS, Java, JavaScript ES,  Python, HTML5, Shell Scripting"} />
              <Skill myimg={test} width={100} height={100} title={"Software Testing"} detail={"Manual testing, Test automation"} />
              
               
              </div>            
          
    </div>
  )
};

export default skills;