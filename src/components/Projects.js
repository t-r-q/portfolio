import React from 'react';
import Project from './Myproject';
import monytracking from "../png/MoneyTracking.png";
import munami from "../png/MunamiiCakery.png";
import todo from "../png/todo.png";
import tst3 from "../png/web3.png";
import tst6 from "../png/web6.png";


const MY_Projects = [
  {
    id: 'e5',
    title: 'Project Prediction testcases with AI in Java',
    detail: 'An application to predict and determine priority of test cases based on test behavior using Mutation Testing & Regression Testing.',
    langaug: 'Java Languages',
    linkIt: 'https://github.com/t-r-q/ReadMatrixPro',
   img_path: tst6
  },
  {
    id: 'e6',
    title: 'Project Share Drawing Board in Reactive Rxjava',
    detail: ' The main objective of this project is to create a collaborative drawing board using Java 2D. This board will allow multiple users to draw different shapes simultaneously. Key Features: Drawing Shapes, Collaboration, Group Management and Server Connection for group',
    langaug: 'Java, Swing, and Reactive Rxjava Languages',
    linkIt: 'https://github.com/t-r-q/DrawWHIT_Java',
   img_path: tst3
  }, {
    id: 'e4',
    title: 'Project Mobile Dailer Android',
    detail: 'The Dialer app for Android is a software application that enables users to place telephone calls from their Android devices. Key features: Functionality: The Dialer app allows users to make phone calls, manage contacts, and view call history. It also provides features such as speed-dial, group calling. Customization: default sound for numbers with many languages. Variety: Obtaining permissions to determine the callers location.',
    langaug: 'Android, Java Languages',
    linkIt: 'https://github.com/t-r-q/androidDailer',
   img_path: tst3
  },
  {
    id: 'e1',
    title: 'Project MunamiiCakery Website',
    detail: 'The client Munamii Cakery has a cupcake and wedding cake shop where she sells cupcakes and wedding cakes. She is interested in having a website to have a more formal presence on the web, where she can customize how she presents the information to her clients.',
    langaug: 'HTML5, CSS3, JavaScript Languages',
    linkIt: 'https://github.com/t-r-q/Munamii-Cakery/tree/main',
   img_path: munami
  },
  { id: 'e2', 
  title: 'Project Money Tracking',
  detail: ' The project was developed using C#. The main objective was to create a comprehensive banking system where users could effortlessly open new accounts as bank customers. Once registered, users had the flexibility to manage multiple bank accounts, enabling them to deposit and withdraw funds while recording important transaction details, including asset values, purchase dates, and prices.', 
  langaug: 'C# language', 
  linkIt: "https://github.com/t-r-q/MoneyTracking",
  img_path: monytracking 
},
  {
    id: 'e3',
    title: 'Project Todo List',
    detail: 'The primary objective of this project to creating a task management system. The application allowed users to model tasks with key attributes. Users could efficiently organize their tasks by sorting, add new tasks, edit existing ones, or remove tasks as needed. One of the noteworthy features of the application was the ability to load and save task lists to and from a file, ensuring data persistence and enhancing user convenience.',
    langaug: 'C# language',
    linkIt: "https://github.com/t-r-q/TodoListApp",
    img_path: todo
  },  
];



const Projects = () =>  {
 


  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto sm:text-center">
      <h2 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-burtons" > My Projects</h2>
      <p className="mt-6 text-lg leading-8 text-gray-100">
        My work on projects involves a combination of creativity and technical prowess. I take pride in translating concepts into tangible solutions,
        using my expertise in softwaare developing to make it happen. With a detail-oriented approach,
        I'm committed to delivering results that not only meet but often exceed expectations.
        I take a structured and methodical approach to each project, always ensuring efficiency, quality, and innovation.
        I'm passionate about creating solutions that make a positive impact and leave a lasting impression.
        I look forward to sharing my project portfolio with you, which showcases my journey and dedication to softwaare developing. Let's explore the possibilities together.
      </p>
    </div>
   
  

    {
  MY_Projects.map((expense) => (
    <Project
      key={expense.id}
      title={expense.title}
      detail={expense.detail}
      langaug={expense.langaug}
      linkIt={expense.linkIt}
      img_path={expense.img_path}
    />
  ))
}       
  
  </div>

  )
}


export default Projects;