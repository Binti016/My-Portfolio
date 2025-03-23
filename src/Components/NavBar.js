import React, { useState } from 'react';
import { logo } from '../assests';

const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-screen text-blue-900  h-[60px] ">
            <div className='p-5 flex justify-between'>
               <img src='' className='h-[40px] rounded-full -mt-[13px]' />
                <div className='hidden md:flex'>
              
                    <ul className='flex flex-row'>
                    
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#intro">Home</a></li>
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#aboutme">About Me</a></li>
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#skills">Skills</a></li>
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#portfolio">Websites</a></li>
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#companies">Companies</a></li>
                        <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer"><a href="/#contactus">Contact Us</a></li>
                        
                    </ul>
                    
                </div>
                <div className='md:hidden lg:hidden'>
                    {!toggle ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            onClick={() => setToggle(true)}
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            onClick={() => setToggle(false)}
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer float-right">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    }
                    {toggle ?
                    
                        <ul className="absolute -translate-x-[110px] flex flex-col mt-8 bg-red-100 p-2">
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">Home</li>
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">About Me</li>
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">Skills</li>
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">Websites</li>
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">Companies</li>
                            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">Contact Us</li>
                        </ul>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default NavBar