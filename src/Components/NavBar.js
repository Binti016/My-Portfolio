import React, { useState } from 'react';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-screen text-blue-900 h-[60px]">
      <div className='p-5 flex justify-between'>
        <div className='flex ml-auto'>
        <div className='hidden md:flex'>
          <ul className='flex flex-row'>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#intro">Home</a></li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#aboutme">About Me</a></li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#skills">Skills</a></li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#portfolio">Websites</a></li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#companies">Companies</a></li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#contactus">Contact Me</a></li>
          </ul>
        </div>
        </div>

        <div className='md:hidden lg:hidden'>
          {!toggle ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              onClick={() => setToggle(true)}
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              onClick={() => setToggle(false)}
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer float-right">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
          {toggle ? 
            <ul className="absolute -translate-x-[110px] flex flex-col mt-8 bg-blue-100 rounded-md p-2">
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#intro">Home</a></li>
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#aboutme">About Me</a></li>
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#skills">Skills</a></li>
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#portfolio">Websites</a></li>
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#companies">Companies</a></li>
              <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#contactus">Contact Me</a></li>
            </ul>
            : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
