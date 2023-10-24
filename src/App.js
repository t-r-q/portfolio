import { 
  createBrowserRouter, 
  RouterProvider
 } 
 from "react-router-dom";

import HomePage from './pages/MyHome';
import Aboutme from "./pages/AboutMe";
import RootLayout from './pages/Root';
import Myproject from "./pages/MyProjeects";
import Myskills from './pages/MySkill';
import Myeducation from './pages/MyEducations';
import Myexperience from './pages/MyExperiences';


const router = createBrowserRouter([
  {
    path: '/',
     element: <RootLayout />,
     children:[
      {path: '/', element: <HomePage />},
      {path: '/aboutme', element: <Aboutme />},
      {path: '/skill', element: <Myskills />},
      {path: '/experience', element: <Myexperience />},
      {path: '/work-project', element: <Myproject />},
      {path: '/education', element: <Myeducation />}
     ],
},
  
]);


function App() {
 
    return <RouterProvider router={router} />;
    
}

export default App;
