import React from 'react';
import { skill } from '../assests';
import { AppText, skillsList, workDetail } from './../Constants';

const Skills = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-10 mb-10' id='skills'>
        <img src={skill} className='h-20 animate-bounce' alt="skills icon" />
        <h2 className='font-bold text-[30px] md:text-[40px]'>{AppText.Skills}
          <span className='text-blue-800'>{AppText.Experties}</span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8 '>
        <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
          {skillsList.map((item, index) => (
            <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full' key={index}>
              <img src={item.icon}
                className="w-[60px]"
                alt={`Skill icon for ${item.icon}`} 
              />
            </div>
          ))}
        </div>
        <div className='flex mt-10 md:mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
          {workDetail.map((item, index) => (
            <div className='flex flex-row mb-6' key={index}>
              <div className='mr-10 font-bold'>
                <h2>{item.year}</h2>
              </div>
              <div>
                <h3 className='font-bold w-full'>{item.position}</h3>
                <h3 className='font-thin text-[15px] text-gray-400'>{item.compnayName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
