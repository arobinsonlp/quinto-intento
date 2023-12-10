import React from "react";

import { useContext } from "react";

import SkillCard from "./SkillCard";
import LangContext from "../../context/LangContext";
import { dataTechs } from "../../data/data";

const Skills = () => {
  const { text } = useContext(LangContext);
  return (
    <section name='skills' className='w-full h-screen text-gray-300 sm:mb-25' style={{marginTop: "27rem",
      marginBottom: "30rem"
  }}>
      {/* CONTAINER */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
          <header className='text-4xl font-bold inline border-pink-600'>Skills</header>
          <p className='border-b-2 border-[#EF8B4F]'>{text.skillsText}</p>
        
        <ul className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 last:mb-24'>
        {dataTechs.map((tech) => (
            <SkillCard key={tech.name} skill={tech} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
