import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";
import { useContext } from "react";
import LangContext from "../context/LangContext";
import resumeFinal from "../assets/cv/ResumeFinal.pdf";

const Navbar = () => {
  const { text, handleLang } = useContext(LangContext);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-b from-[#22162B] to-transparent text-gray-300 '>
      <div>
        <Link to='home' smooth={true} duration={350}>
          <img
            src={Logo}
            alt='Logo'
            style={{
              width: "70px",
              filter: "invert(100%)",
            }}
          />
        </Link>
      </div>
      {/*menu */}

      <ul className='hidden md:flex'>
        <li onClick={(e) => handleLang(e)}>
          {text.navAbout === "Sobre mí" ? "ES" : "EN"}
        </li>
        <Link to='home' smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to='about' smooth={true} duration={500}>
          <li>{text.navAbout}</li>
        </Link>
        <Link to='skills' smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to='work' smooth={true} duration={500}>
          <li>{text.navWork}</li>
        </Link>
        <Link to='contact' smooth={true} duration={500}>
          <li>{text.navContact}</li>
        </Link>
      </ul>

      {/*ANVORGUESA*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*móbile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#451F55] flex flex-col justify-center items-center font-extrabold"
        }
      >
        <li className='pb-6 text-5xl' onClick={(e) => handleLang(e)}>
          {text.navAbout === "Sobre mí" ? "ES" : "EN"}
        </li>
        <li className='pb-6 text-5xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className='py-6 text-5xl'>
          {" "}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            {text.navAbout}
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            {text.navWork}
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            {text.nav}
          </Link>
        </li>
      </ul>
      {/*SOCIAL ICONs */}
      <div className='hidden lg:flex fixed flex-col top-[25%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
             // href='https://www.linkedin.com/in/angel-scutari-a4b058144/'
              href='https://www.linkedin.com/in/arobinsonlp/'
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
             // href='https://github.com/AngelVDev'
              href='https://github.com/arobinsonlp'
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='mailto:arobinson6366@gmail.com'
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-500'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href={resumeFinal}
              filename='Robinson Lozano cloud.pdf'
              download={"Robinson Lozano cloud.pdf"}
            >
              {/* <button
              onClick={() => alert(text.alertCV)}
              className='flex justify-between items-center w-full text-gray-200'
            > */}
              {text.navResume}
              <BsFillPersonLinesFill size={30} /> {/* </button> */}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-600'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='https://wa.me/+51929167865'
            >
              WhatsApp <BsWhatsapp size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
