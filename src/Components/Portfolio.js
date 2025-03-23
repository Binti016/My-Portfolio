import React, { useEffect, useState } from "react";
import { AppText, portfolio } from "../Constants";
import { robo } from "./../assests/index";

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  },[]);
  const filterPortfolio = (type) => {
    if (type === "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10" id="portfolio">
      <div className="flex">
        <h1 className="text-[40px] font-bold">
          {AppText.Creative}&nbsp;
          <span className="text-blue-800">{AppText.Portfolio}</span>
        </h1>
        <img src={robo} className="w-[70px] ml-5 animate-bounce mt-[-15px]" />
      </div>
      <div className="flex flex-row justify-evenly gap-[70px] md:gap-[150px] px-4 md:px-72">
        <button
          onClick={() => filterPortfolio("All")}
          className="border-blue-800 border-2 p-1 px-4
        rounded-md text-blue-700 focus:text-white 
        focus:ring-blue-300 focus:bg-blue-600 focus:ring"
        >
          All
        </button>
        <button
          onClick={() => filterPortfolio("ui/ux")}
          className="border-blue-800 border-2 p-1 px-4
        rounded-md text-blue-700 focus:text-white 
        focus:ring-blue-300 focus:bg-blue-600 focus:ring"
        >
          UI/UX
        </button>
        <button
          button
          onClick={() => filterPortfolio("website")}
          className="border-blue-800 border-2 p-1 px-4
        rounded-md text-blue-800 focus:text-white 
        focus:ring-blue-300 focus:bg-blue-600 focus:ring"
        >
          Web App
        </button>
      </div>
      <div
        className="grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
      md:px-24 lg:px-48 p-4 gap-3"
      >
        {portfolioList.map((item, index) => (
          <div className="p-2 flex flex-col transition-all rounded-lg bg-blue-100 ease-in-out group hover:scale-110">
            <img
              src={item.imageUrl}
              className="h-[180px] rounded-lg object-cover"
            />
            <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center font-bold">
              {item.title}
            </h1>
            <h1 className="text-[12px] text-gray-500 px-6 pb-3">{item.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
