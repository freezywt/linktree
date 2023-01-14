import { useMemo, useState, useEffect } from 'react';
import { GiNightSky, GiWorld, GiGamepad } from 'react-icons/gi';
import { AiOutlineLink } from 'react-icons/ai';
import { useLanyardWS } from 'use-lanyard';
import { Link } from 'react-router-dom';
import Banner from '../../assets/dc_banner.png';
import '../../index.css';

interface DiscordStatus {
  online: string;
  idle: string;
  dnd: string;
  offline: string;
}

interface StatusColor {
  online: string;
  idle: string;
  dnd: string;
  offline: string;
}

const DiscordStatus: DiscordStatus = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Does not disturb',
  offline: 'Offline',
};

const StatusColor: StatusColor = {
  online: 'bg-online',
  idle: 'bg-idle',
  dnd: 'bg-dnd',
  offline: 'bg-offline',
};

const getAssetUrl = (appId: string, asset: string) =>
  asset.startsWith('mp:external')
    ? `https://media.discordapp.net/${asset.replace('mp:', '')}`
    : `https://cdn.discordapp.com/${appId}/${asset}.png`;

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState('#36393F');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const presence = useLanyardWS('972820329686790184');
  const user = presence?.discord_user;
  const status = presence ? DiscordStatus[presence.discord_status as keyof typeof DiscordStatus] : undefined;
  const activity = useMemo(() => {
    return presence?.activities?.find((x) => x.type === 0);
  }, [presence]);
  const imageUrl = activity?.application_id && getAssetUrl(activity.application_id, activity.assets!.large_image);
  const statusUser = presence?.activities?.find((x) => x.type === 4);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  const handleClick = () => {
    setBgColor(bgColor === '#36393F' ? '#171717' : '#36393F');
    document.body.style.backgroundColor = bgColor;
  };

  return (
    <div className="flex flex-col items-center w-full pt-16 pb-12">
        <header className="absolute top-0 right-0">
            <button onClick={handleClick} className="text-white py-2 px-4 rounded-lg m-3.5 hover:scale-125 transition duration-200 ease-in-out"><GiNightSky color='white' size={40}/></button>
        </header>
        {presence && user ? (
            <div className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit">
                <div className="flex flex-col items-left position-relative">
                    {user.avatar ? (
                        <img
                        className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4 ml-6 z-20 mt-14 border-8 position-relative"
                            style={{ borderColor: bgColor}}
                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`}
                            alt="User Avatar"
                        />
                    ) : (
                        <img
                            className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4 ml-6 z-20 mt-14 border-8 position-relative"
                            style={{ borderColor: bgColor}}
                            src={`https://cdn.discordapp.com/embed/avatars/${parseInt(
                                user.discriminator.slice(-1),
                                10
                            ) % 5}.png`}
                            alt="User Avatar"
                        />
                    )}
                    <div className={`absolute left-32 top-36 w-6 h-6 rounded-full ${StatusColor[presence.discord_status as keyof typeof StatusColor]} mr-2 z-20`} />
                    <div className="bg-custom-color-banner h-32  0 w-full absolute top-0 left-0 transform -translate-y-50 z-10"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.31)'}}>
                    <img src={Banner} className="w-full h-32" />
                    </div>
                </div>
                <div className="mt-6 p-6 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.31)'}}>
                    <h4 className="text-xl font-bold leading-6">
                        {user.username}
                        <span className="font-normal text-gray-400 ml-1 text-lg">
                            #{user.discriminator}
                        </span>
                    </h4>
                    <span className="font-normal text-gray-400 text-lg">{statusUser?.state}</span>
                    <div className='mt-3 p-6 border-t-2 border-gray-500'>
                        <span className="font-normal text-gray-400 text-lg">! ꒰ა ♡ ໒꒱ // freezy</span>
                        <br />
                        <span className="font-normal text-gray-400 text-lg">♡ <Link to={{ pathname: "http://freezy.space" }} className="text-sky-500" target="_blank">http://freezy.space</Link> ... !!</span>
                    </div>
                    {activity && (
                        <div className="mt-4">
                        <h5 className="ml-1 mb-1 text-sm font-bold text-gray-200">Doing something</h5>
                        <div className="flex flex-row items-center rounded-lg overflow-hidden p-4">
                            <div className="w-20 h-20 min-w-[5rem] flex items-center justify-center bg-black rounded-xl relative mr-4">
                            <img
                                className="rounded-xl"
                                src={
                                activity.assets?.large_image
                                    ? getAssetUrl(activity.application_id!, activity.assets.large_image)
                                    : `https://dcdn.dstn.to/app-icons/${activity.application_id}`
                                }
                                alt="App Large Image"
                            />
                            {activity.assets?.small_image && (
                                <img
                                className="w-8 h-8 border-2 rounded-full bg-black border-black absolute bottom-[-8px] right-[-8px]"
                                src={getAssetUrl(activity.application_id!, activity.assets.small_image!)}
                                alt="App Small Image"
                                />
                            )}
                            </div>
                            <div className="flex flex-col">
                            <h5 className="font-bold leading-4 mb-1">{activity.name}</h5>
                            <span className="text-sm text-gray-300">{activity.state}</span>
                                {activity.details && (
                                    <span className="text-sm text-gray-300">{activity.details}</span>
                                )}
                            </div>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <div>Loading...</div>
        )}
        <Link to="/Social" className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out">
            <GiWorld color='white' size={40}/>
            <p className="ml-2 text-lg">Social</p>
        </Link>
        <Link to={`/Gaming`} className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out">
            <GiGamepad color='white' size={40}/>
            <p className="ml-2 text-lg">Gaming</p>
        </Link>
        <Link to={{ pathname: "https://www.freezywt.com/"}} target="_blank"  className="relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit mt-6 flex flex-nowrap items-center hover:scale-110 transition duration-200 ease-in-out">
            <AiOutlineLink color='white' size={40}/>
            <p className="ml-2 text-lg">Portfolio</p>
        </Link>
    </div>
)};

export default Home;