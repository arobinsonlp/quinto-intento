import Logo from '../assets/logo.svg';
import React from 'react';
import { useContext } from 'react';
import LangContext from '../context/LangContext';

const Footer = () => {
  const { text } = useContext(LangContext);
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={Logo}
            className="mr-3 h-10 rounded-full bg-[#ffffffc1]"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            R.Lozano
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://tailwindcss.com/">{text.footer1}</a>
          </li>
          <li>
            {text.footer2}{' '}
            <a
              href="https://www.youtube.com/watch?v=XqrZo7zU-oc"
              className="hover:shadow-lg shadow-[#5ff2ff]"
            >
              🌌
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-100 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a
          href="https://www.youtube.com/watch?v=w15oWDh02K4"
          className="hover:underline"
        >
          Robinson™
        </a>
        {text.footer3}
      </span>
    </footer>
  );
};

export default Footer;
