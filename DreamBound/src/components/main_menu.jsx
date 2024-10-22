import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import Settings from "./settings";
import AudioPlayer from "./AudioPlayer";
import { useAudio } from './AudioContext';

const Menu = () => {

    const navigate = useNavigate();

    
    const startClick = () => {
        navigate('/choice')
    };
    const { togglePlayPause } = useAudio();
    

    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    return (
        <div className="bg-onyx w-screen h-screen flex flex-wrap justify-center items-center">
            <div className="bg-paynegrey border-2 border-black rounded w-11/12 h-5/6 space-y-2 flex flex-wrap justify-center">
                <div className="bg-paynegrey"></div>
                <div className="bg-starrysky text-ash border-2 border-black rounded-xl w-8/12 h-32 gap-4 flex justify-center items-center">
                    <h1 className="font-heading text-8xl">DreamBound</h1>
                </div>
                <button onClick={() => {
                    startClick();
                    togglePlayPause();
                }}  className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Start Game</h2>
                </button>
                <button onClick={() => setShowSettings(true)} className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Settings</h2>
                </button>
                <a className="bg-outerspace text-whitesmoke border-2 border-black rounded font-heading text-6xl w-8/12 h-24 gap-4 flex justify-center items-center" href="https://github.com/Stephen-T-2023" target="blank">
                    Github
                </a>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Exit Game</h2>
                </button>
            </div>
            <Settings onClose={handleonClose} visible={showSettings}/>
        </div>
    );
}

export default Menu;