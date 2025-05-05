import React, { useState } from "react";
import { bintiii } from "../assests";
import { AppText } from "../Constants";
import Typewriter from "typewriter-effect";

const achievements = [
  {
    title: "Finalist in WebXtreme Hackathon",
    type: "image",
    content: "webXtreme.jpeg",
  },
  {
    title: "Webstack Essentials Course Completion",
    type: "image",
    content: "webstack.jpeg",
  },
  {
    title: "Engibiz 2025",
    type: "pdf",
    content: "Engibiz 2025.pdf",
  },
  {
    title: "Independence Day Programming Contest 2023",
    type: "image",
    content: "/IDPC2023.jpg",
  },
  {
    title: "Volunteered at LeetCon 2023",
    type: "image",
    content: "/Leetcon.jpg",
  },
  {
    title: "React Fundamental Course 2024",
    type: "image",
    content: "/React Fundamentals.jpg",
  },
  {
    title: "Industrial Training at Brain Station 23",
    type: "image",
    content: "/BS23.jpg",
  },
  {
    title: "Academic Achievements",
    type: "pdf",
    content: "/Academics.pdf",
  },
  {
    title: "Essay Competition 2016",
    type: "image",
    content: "/Essay2016.jpg",
  },
  {
    title: "Essay Competition 2019",
    type: "image",
    content: "/Essay2019.jpg",
  },
  {
    title: "Resume",
    type: "pdf",
    content: "/binticv.pdf",
  },
];

const Intro = () => {
  const [toggle, setToggle] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div
      className="m-7 px-10 md:px-20 items-center flex flex-col md:flex-row gap-0 md:gap-20"
      id="intro"
    >
      <div>
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">{AppText.hello}</h1>
        <div className="flex">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">{AppText.Iam}&nbsp;</h1>
          <span className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-blue-800">
            <Typewriter
              options={{
                strings: [
                  AppText.Boshita,
                  AppText.FrontedDeveloper,
                  AppText.UIUXDesigner,
                  AppText.CompetitiveProgrammer,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <h1 className="text-gray-500 mt-4 text-[15px] md:[20px]">{AppText.IntroDesc}</h1>
        <div className="flex flex-row gap-[10px]">
          <div>
            <button
              onClick={() => openModal(achievements.find((a) => a.title === "Resume"))}
              className="bg-blue-700 mt-4 mb-4 px-3 p-1 lg:pd-2 text-[15px] md:text-[16px] 
        transition-all ease-in-out hover:scale-105 text-white rounded-md "
            >
              RESUME
            </button>
          </div>
          <div className="achievement">
            {!toggle ? (
              <button
                onClick={() => setToggle(true)}
                className="bg-blue-700 mt-4 mb-4 px-3 p-1 lg:pd-2 text-[15px] md:text-[16px] 
        transition-all ease-in-out hover:scale-105 text-white rounded-md "
              >
              CERTIFICATIONS
              </button>
            ) : (
              <button
                onClick={() => setToggle(false)}
                className="bg-blue-800 mt-4 mb-4 px-3 p-1 lg:pd-2 text-[15px] md:text-[16px] 
          transition-all ease-in-out hover:scale-105 text-white rounded-md "
              >
               CERTIFICATIONS
              </button>
            )}
            {toggle ? (
              <ul className="absolute flex flex-col mt-2 bg-white p-2 z-10 rounded-lg">
                {achievements.map((achievement) => (
                  <li
                    key={achievement.title}
                    className="p-3 mt-2 transition-all ease-in-out hover:scale-105 cursor-pointer bg-blue-300 rounded-lg text-sm text-zinc-800"
                    onClick={() => openModal(achievement)}
                  >
                    {achievement.title}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src={bintiii}
        alt="home"
        className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] rounded-md"
      />

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-blue-300 p-5 rounded-lg relative w-[800px] h-[600px] items-center flex justify-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            {modalContent.type === "image" ? (
              <img
                src={modalContent.content}
                alt={modalContent.title}
                className="w-full h-full rounded-lg"
              />
            ) 
            : 
            (
              <iframe
                src={modalContent.content}
                title={modalContent.title}
                className="w-full h-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
