import React from "react";

const SkillCard = ({skill}) => {
  const { name, icon } = skill;
  return (
    <article
      key={name + " card"}
      className='shadow-md rounded-md p-1 shadow-[#040c16] hover:scale-110 duration-300'
    >
    { skill.name === "Zustand" ? 
    <img className="w-3/4 mx-auto -mb-4" src={icon} alt={name + " logo"}/>
    : <img className='w-20 mx-auto' src={icon} alt={name + " logo"}/>}
      <p className='my-2'>{name}</p>
    </article>
  );
};

export default SkillCard;
