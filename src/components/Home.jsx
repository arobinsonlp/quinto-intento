import React from 'react';
import { useContext } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import LangContext from '../context/LangContext';

const Home = () => {
  const { text } = useContext(LangContext);
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">{text.home1}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-pink-500">Robinson</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8F4F88]">
          {text.home2}
        </h2>
        <div className="text-[#f8c630] py-4 max-w-[700px]">
          <p>{text.home3}</p>
          <p>{text.home4}</p>
          <p>{text.home5}</p>
        </div>
        <div>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500">
              {' '}
              {text.homeButton}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />{' '}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
