import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Settings from "./settings";
import textData from './textData';

const Choices = () => {

    // allows for navigation from the choices page to the main menu on button press
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/');
    };

    // manages the state to control the visibility of the settings page
    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    // stores the URL of the background image for the choices page in case a feature where the background can change wants to be added in the future
    const imageURL = "../src/assets/starrysky.jpg";

    // sets the initial text content on the screen and updates as options are selected
    const [textFill, setTextFill] = useState(textData.start);

    // updates the displayed text and options based on the user's choice, if a valid path exists
    const handleOptionClick = (nextPath) => {
        if (nextPath && textData[nextPath]) {
            setTextFill(textData[nextPath]); 
        } else {
            console.log("No further path available.");
        }
    };

    return (
        // setting the background and layout
        <div className="bg-starrysky w-screen h-screen flex flex-wrap justify-center" style={{ backgroundImage: `url(${imageURL})` }}>
            
            {/* top navigation bar with Home, Github, and Settings buttons */}
            <div className="font-heading text-7xl w-full h-20 flex">
                <button onClick={homeClick} className="bg-ash border-2 border-black rounded w-1/2 h-20">Home</button>
                <a className="bg-ash border-2 border-black rounded w-1/2 h-20 flex justify-center" href="https://github.com/Stephen-T-2023" target="blank">Github</a>
                <button onClick={() => setShowSettings(true)} className="bg-ash border-2 border-black rounded w-1/2 h-20">Settings</button>
            </div>

            {/* main text display area, showing story content and options */}
            <div className="bg-no-repeat bg-cover bg-center bg-fixed w-screen h-4/6 flex flex-wrap justify-center items-center">
                <div className="bg-paynegrey opacity-80 border-2 border-black rounded w-11/12 h-5/6 flex justify-center">
                    <h1 className="font-body text-3xl text-whitesmoke p-4 break-keep flex justify-center items-center">{textFill.text}</h1>
                </div>
            </div>

            {/* option buttons, allowing the user to make choices to progress the story */}
            <div className="flex flex-wrap w-10/12 h-20">
                <button 
                    className="bg-outerspace border-2 border-black rounded font-heading text-4xl text-whitesmoke w-1/3 h-full"
                    onClick={() => handleOptionClick(textFill.option1path)}
                >
                    {textFill.option1text}
                </button>
                <div className="w-1/3 h-full"/>
                <button 
                    className="bg-outerspace border-2 border-black rounded font-heading text-4xl text-whitesmoke w-1/3 h-full"
                    onClick={() => handleOptionClick(textFill.option2path)} 
                >
                    {textFill.option2text}
                </button>
            </div>
            <Settings onClose={handleonClose} visible={showSettings} />
        </div>
    );
};

export default Choices;
