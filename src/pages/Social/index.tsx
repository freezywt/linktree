import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

const Gaming: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-16 pb-12">
      <header className="absolute top-0 left-0">
        <Link to="/">
          <IoMdArrowBack color="white" size={30} />
        </Link>
      </header>
      <div className="relative p-4 w-full max-w-xl">
        <Link
          to={{ pathname: "https://instagram.com/freezy.codes" }}  
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Instagram
        </Link>
        <Link
          to={{ pathname: "https://www.tiktok.com/@freezy.codes" }}  
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          TikTok
        </Link>
        <Link 
          to={{ pathname: "https://open.spotify.com/user/o69ztjhncz1mqn55fb4dzn41n?si=e6e91535a28e4851" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Spotify
        </Link>
        <Link
          to={{ pathname: "https://discord.com"}}  
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Discord "Coming soon"
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/freezywt/" }}  
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Linkedin
        </Link>
        <Link
          to={{ pathname: "https://tryhackme.com/p/freezywt" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          TryHackMe
        </Link>
      </div>
    </div>
  );
};

export default Gaming;