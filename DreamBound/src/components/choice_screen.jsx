import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Settings from "./settings";
import Music from "./music_play_pause";

const Choices = () => {

    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/')
    };

    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    const imageURL = "../src/assets/starrysky.jpg"

    const [textFill, settextFill] = useState({
        text : "In a world ravaged by nuclear warfare, hope has become a distant memory. Amid the ruins, the ancient god Ygraorra has descended, offering salvation through the seductive harvest of dreams. His followers, the Dreamweavers, lull the desperate into slumber, where they can escape the bleak reality and dwell in their ideal worlds. But not everyone is swayed; a growing resistance fights to reclaim the shattered remnants of humanity’s former life. You find yourself ensnared by the Dreamweavers, on the brink of Ygraorra's 'grace.' As the whispers of an enchanting utopia flood your mind, you face a pivotal choice: Do you succumb to the alluring visions of a perfect existence, or do you rally against the forces that would bind you to a false paradise?",
        option1: "Accept Ygraorra's Grace.",
        option2: "Reject Your Fate, Fight Back!",
    })

    return (
        <div className="bg-onyx w-screen h-screen flex flex-wrap justify-center">
            <div className="font-heading text-7xl w-full h-20 flex">
                <button onClick={homeClick} className="bg-ash border-2 border-black rounded w-1/2 h-20">Home</button>
                <button className="bg-ash border-2 border-black rounded w-1/2 h-20">Contacts</button>
                <button onClick={() => setShowSettings(true)} className="bg-ash border-2 border-black rounded w-1/2 h-20">Settings</button>
            </div>
            <div style={{ backgroundImage: `url(${imageURL})`}} className="bg-no-repeat bg-cover bg-center bg-fixed w-screen h-4/6 flex flex-wrap justify-center items-center">
                <div className="bg-paynegrey opacity-80 border-2 border-black rounded w-11/12 h-5/6 flex justify-center">
                    <h1 className="font-body text-3xl p-4 break-keep flex justify-center items-center">{textFill.text}</h1>
                </div>
            </div>
            <div className="flex flex-wrap w-full h-20">
                <div className="w-1/12 h-full"></div>
                <button className="bg-outerspace border-2 border-black rounded font-heading text-4xl w-1/3 h-full">{textFill.option1}</button>
                <div className="w-1/6 h-full"></div>
                <button className="bg-outerspace border-2 border-black rounded font-heading text-4xl w-1/3 h-full">{textFill.option2}</button>
            </div>
            <Music/>
            <Settings onClose={handleonClose} visible={showSettings}/>
        </div>
    );
}

export default Choices