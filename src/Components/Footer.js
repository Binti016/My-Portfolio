import React from 'react';
import { AppText, socialNetwork } from '../Constants';

const Footer = () => {
  return (
    <div className='bg-blue-100 mt-10 p-20 items-center flex flex-col px-10 md:px-80' id='footer'>
      <div className='flex gap-4'>
        {socialNetwork.map((item, index) => (
          <div key={index}>
          <a href={item.url}>
            <img src={item.logo} className="w-[40px]" alt={`${item.name} logo`} />
            </a>
          </div>
        ))}
      </div>
      <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  );
}

export default Footer;
