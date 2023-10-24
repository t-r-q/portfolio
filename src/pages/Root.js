import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import '../App.css';
 

function RootLayout() {
    
  return (
    
      <div className="flex">
        <MainNavigation />
     
      <div className="h-screen flex-1 p-7 text-x1 text-gray-900 ">
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        
        <Outlet />
      </main>
      </div>

      </div>
    

  );
}

export default RootLayout;