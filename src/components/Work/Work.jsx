import React from "react";
import { useContext } from "react";
import LangContext from "../../context/LangContext.js";
import { databackend, datafrontend, datafullstack } from "../../data/data.js";
import CardBackend from "./CardBackend.jsx";
import CardFS from "./CardFS.jsx";

const Work = () => {
  const { text } = useContext(LangContext);
  const projectsFullstack = datafullstack;
  const frontPro = datafrontend;
  return (
    <section
      name='work'
      className='w-full md:h-screen text-gray-300 p-4 mt-16 mb-10'
    >
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <h2 className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            {text.navWork}
          </p>
          <p className='pt-3 text-[#F8C630]'>✨Check my projects✨</p>
          <CardFS projects={projectsFullstack} title={"Full-stack"} />
          <CardFS projects={frontPro} title={"Front-end"} />
          <CardBackend projects={databackend} title={"Back-end"} />
        </h2>
      </div>
    </section>
  );
};

export default Work;
