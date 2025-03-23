import React from 'react'
import {homeImage} from '../assests';
import {aboutSection, AppText} from '../Constants' 
import {laptop, wave} from '../assests'

const AboutMe = () => {
  return (
    <div className='p-0 mt-36 w-full' id='aboutme'>
      <img src={wave} className='w-screen absolute '/>
      <img src={laptop} className='absolute mt-[-100px] md:mt-[-170px] w-[220px] md:w-[300px]'/>
      <div className='h-[300px] bg-blue-700 w-full'>
      <h2 className='p-10 md:p-6 text-[50px] text-center font-bold text-white'>{AppText.About}
        <span className='text-black'> {AppText.Me}</span>
      </h2>
      <h2 className='text-white mt-7 md:mt-10 text-center px-5 md:px-54 lg:px-60 mt-[-10px] '>{AppText.aboutMeDescripion}</h2>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center px-32 mt-[-60px]'>
        {
             aboutSection.map((item,index)=>
              <div className=' group hover:bg-blue-300 mb-5 p-7 rounded-2xl'>
                <img src={item.image} className='w-[230px] h-[230px] object-cover rounded-lg'/>
                <div className='w-[230px] pb-[20px]'>
                <h2 className='font-bold text-center group-hover:text-blue-900'>{item.title}</h2>
                <h2 className='text-[12px] text-gray-500 text-center group-hover:text-blue-900'>{item.desc}</h2>
                </div>
                
              </div>
            )
        }
      </div>
    </div>
  )
}

export default AboutMe