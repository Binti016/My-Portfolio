import React from "react";
import { AppText, CompanyImage } from "../Constants";

const Companies = () => {
  return (
    <div className=" bg-blue-100 p-5" id="companies">
    <div className="flex flex-col items-center">
      <div className="mt-[20px]">
        <h1 className="text-[40px] font-bold">
          {AppText.CompaniesI}
          <span className="text-blue-800">{AppText.WorkedFor}</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-[100px] mt-[20px]">
      {CompanyImage.map((item,index)=>(
        <img src={item.imageUrl} className="h-[80px] w-[100px]"/>
      ))}

      </div>
    </div>
    </div>
  );
};

export default Companies;
