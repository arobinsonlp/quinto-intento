import React, { useContext } from "react";
import { FaGithubAlt, FaRegWindowMaximize } from "react-icons/fa";
import LangContext from "../../context/LangContext";
import { converter } from "../../data/techsConverter";
// import TarotCard from "./TarotCard";

function CardBackend({ projects, title }) {
  const { text } = useContext(LangContext);
  return (
    <section>
      {/*Grid ITEM */}
      <header className='my-2 p-2 text-2xl tracking-wider'>{title}</header>
      <div className='grid place-self-start sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((item, index) => (
          <article
            key={item.id + "FS"}
            style={{ backgroundImage: `url(${item.image})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md 
      flex justify-center text-center items-center mx-auto content-div '
          >
            {/* Hover effect for images */}
            <div className='opacity-0 transition group-hover:opacity-100 bg-[#14143ce4] rounded-lg p-2'>
              <header className='text-2xl font bold text-white tracking-wider '>
                {item.name}
              </header>
              <section className='w-full flex content-center justify-center items-center'>
                {item?.techs.map((tech) => (
                  <span key={tech + "Tech" + item.id} className='mx-1.5'>
                    {converter(tech)}
                  </span>
                ))}
              </section>
              <p>{item.description}</p>
              <div className='w-full my-2 flex content-cent justify-center items-center '>
                {item?.github && (
                  <a
                    className='mx-1.5 rounded-md flex flex-col items-center bg-slate-800 p-2'
                    href={item.github}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FaGithubAlt size='2rem' />
                    <p>{text.workCode}</p>
                  </a>
                )}
                {item?.isWIP === false && (
                  <a
                    className='mx-1.5 rounded-md flex flex-col items-center bg-slate-800 p-2'
                    href={item.live}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FaRegWindowMaximize size='2rem' />
                    <p>{text.workLive}</p>
                  </a>
                )}
                {item?.isWIP === true && (
                  <span className='text-center rounded-lg px-2 py-2 m-2 w-[5%] bg-[linear-gradient(45deg,#ff6547_0%,#ffb144_51%,#ff7053_100%)] text-white font-semibold uppercase shadow-[0_5px_10px_rgba(0,0,0,0.23)]'>
                    WIP
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* <TarotCard /> */}
    </section>
  );
}

export default CardBackend;
