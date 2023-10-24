import { 
  createBrowserRouter, 
  RouterProvider,
  createHashRouter 
 } 
 from "react-router-dom";

import HomePage from './pages/MyHome';
import Aboutme from "./pages/AboutMe";
import RootLayout from './pages/Root';
import Myproject from "./pages/MyProjeects";
import Myskills from './pages/MySkill';
import Myeducation from './pages/MyEducations';
import Myexperience from './pages/MyExperiences';


const router = createHashRouter([
  {
    path: '/',
     element: <RootLayout />,
     children:[
      {path: '/', element: <HomePage />},
      {path: '/portfolio/#/aboutme', element: <Aboutme />},
      {path: '/portfolio/#/skill', element: <Myskills />},
      {path: '/portfolio/#/experience', element: <Myexperience />},
      {path: '/portfolio/#/work-project', element: <Myproject />},
      {path: '/portfolio/#/education', element: <Myeducation />},
      {path: '*', element: <HomePage />}
     ],
},
  
]);
//

function App() {
 
    return <RouterProvider router={router} />;
    
}

export default App;
