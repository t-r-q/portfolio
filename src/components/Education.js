
const Education = () =>{
    return (
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
    )
}



export default Education;