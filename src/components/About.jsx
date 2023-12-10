import React from "react";
import { useContext } from "react";
import LangContext from "../context/LangContext";

const About = () => {
  const { text } = useContext(LangContext);
  return (
    <section name='about' className='w-full text-gray-300 h-4/6 mb-12'>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w[100px] w-full  grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              {text.aboutAbout}
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold pl-4'>
            <p>{text.aboutText1}</p>
          </div>
          <div>
            <p>{text.aboutText2}</p>
            <p>{text.aboutText3}</p>
            <p>{text.aboutText4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
