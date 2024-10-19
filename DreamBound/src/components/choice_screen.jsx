import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Settings from "./settings";

const Choices = () => {

    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/')
    };

    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    const imageURL = "../src/assets/starrysky.jpg"

    const textFill = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quibusdam, assumenda ea aliquid eius minima illum soluta culpa earum, nisi optio modi qui eum facere officia doloribus tenetur. Eligendi quae itaque, quaerat impedit vel voluptatem aliquid unde fuga tempore incidunt nobis hic repudiandae nihil minima qui. Commodi dolor quibusdam harum?"

    const option1 = "Option 1"
    const option2 = "Option 2"

    return (
        <div className="bg-onyx w-screen h-screen flex flex-wrap justify-center">
            <div className="font-heading text-7xl w-full h-20 flex">
                <button onClick={homeClick} className="bg-ash border-2 border-black rounded w-1/2 h-20">Home</button>
                <button className="bg-ash border-2 border-black rounded w-1/2 h-20">Contacts</button>
                <button onClick={() => setShowSettings(true)} className="bg-ash border-2 border-black rounded w-1/2 h-20">Settings</button>
            </div>
            <div style={{ backgroundImage: `url(${imageURL})`}} className="bg-no-repeat bg-cover bg-center bg-fixed w-screen h-4/6 flex flex-wrap justify-center items-center">
                <div className="bg-paynegrey opacity-80 border-2 border-black rounded w-11/12 h-5/6 flex justify-center">
                    <h1 className="font-body text-3xl">{textFill}</h1>
                </div>
            </div>
            <div className="flex flex-wrap w-full h-20">
                <div className="w-1/12 h-full"></div>
                <button className="bg-outerspace border-2 border-black rounded font-heading text-4xl w-1/3 h-full">{option1}</button>
                <div className="w-1/6 h-full"></div>
                <button className="bg-outerspace border-2 border-black rounded font-heading text-4xl w-1/3 h-full">{option2}</button>
            </div>
            <Settings onClose={handleonClose} visible={showSettings}/>
        </div>
    );
}

export default Choices