import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import {
  AiOutlineUser, AiOutlineWallet,
  AiFillApi, AiOutlineRead, AiOutlineTrophy
} from "react-icons/ai";
import {
  SlPencil, 
} from "react-icons/sl";
import '../App.css';
import control from "../png/control.png";
import logo from "../png/logo.png";






const Menus = [

    { title: "Dashboard", alt: "/", icon: AiOutlineUser },
    { title: "About me", alt: "/aboutme", icon: AiFillApi },
    { title: "Skills", alt: "/skill", icon: AiOutlineWallet },
    { title: "Experience", alt: "/experience", icon: AiOutlineTrophy },
    { title: "Projects", alt: "/work-project", icon: SlPencil },
    { title: "Education", alt: "/education", icon: AiOutlineRead },
  ];

function MainNavigation() {
    const [open, setOpen] = useState(true);
    const clasName = `${open ? "w-70" : "w-20 "} bg-gradient-to-r from-cyan-500 to-sky-800 text-white px-4 py-2 border-none rounded-md ms-2 relative`;
   
   
   return ( 
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
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white" } `}
            >
              <a href={`${Menu.alt}`}>
                <div>
                  {React.createElement(Menu?.icon, { size: "20" })}
                </div>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  <NavLink to={Menu.alt}> {Menu.title}</NavLink>
                </span>
              </a>
            </li>
          ))}
        </ul>

      </div>
     
    );
     
     
     
     
  }
  
  export default MainNavigation;
  