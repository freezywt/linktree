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
          to={{ pathname: "https://steamcommunity.com/id/policia-federal/" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Steam "Freezy"
        </Link>
        <Link
          to={{ pathname: "http://live.xbox.com/Profile?Gamertag=freezycodes" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Xbox "freezycodes"
        </Link>
        <Link
          to={{ pathname: "https://www.epicgames.com/" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Fortnite "freezy.codes"
        </Link>
        <Link
          to={{ pathname: "https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&v=103&gid=2&bbs_theme=light&bbs_theme_device=1&utm_source=share&utm_medium=link&utm_campaign=web&utm_id=2#/ys" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Genshin Impact "freezy.codes"
        </Link>
        <Link
          to={{ pathname: "https://www.minecraft.net/" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Minecraft "hidrogenio"
        </Link>
        <Link
          to={{ pathname: "https://support-valorant.riotgames.com/hc/en-us/sections/360007914453-Reporting-Bans-in-VALORANT" }}
          target="_blank"
          className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out"
        >
          Valorant 'i get ban, dont use cheats hehe'
        </Link>
      </div>
    </div>
  );
};

export default Gaming;