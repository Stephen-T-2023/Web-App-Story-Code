import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import Settings from "./settings";
import Music from "./music_play_pause";

const Menu = () => {

    // const audiopath = '../src/assets/background_loop.mp3'
    
    // const [audio] = useState(new Audio(audiopath))
    // const [playing, setPlaying] = useState(false)

    // const toggle = () => setPlaying(!playing)

    // useEffect(() => {
    //     playing ? audio.play() : audio.pause()
    //     },
    //     [playing, audio])

    // useEffect(() => {
    //     audio.addEventListener('ended', () => {
    //         audio.play()
    //     })
    // },
    // [audio])

    const navigate = useNavigate();
    const startClick = () => {
        navigate('/choice')
    };

    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    return (
        <div className="bg-onyx w-screen h-screen flex flex-wrap justify-center items-center">
            <div className="bg-paynegrey border-2 border-black rounded w-11/12 h-5/6 space-y-2 flex flex-wrap justify-center">
                <div className="bg-paynegrey"></div>
                <div className="bg-starrysky text-ash border-2 border-black rounded-xl w-8/12 h-32 gap-4 flex justify-center items-center">
                    <h1 className="font-heading text-8xl">DreamBound</h1>
                </div>
                <button onClick={startClick} className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Start Game</h2>
                </button>
                <button onClick={() => setShowSettings(true)} className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Settings</h2>
                </button>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Contacts</h2>
                </button>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Exit Game</h2>
                </button>
            </div>
            {/* <button onClick={toggle} className="bg-whitesmoke rounded-xl font-heading text-2xl w-2/12 h-8">Play / Pause</button> */}
            <Settings onClose={handleonClose} visible={showSettings}/>
        </div>
    );
}

export default Menu;