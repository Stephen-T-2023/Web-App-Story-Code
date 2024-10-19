import { useNavigate } from "react-router-dom";

const Menu = () => {

    const navigate = useNavigate();

    const startClick = () => {
        navigate('/choice')
    };

    return (
        <div className="bg-onyx w-screen h-screen flex justify-center items-center">
            <div className="bg-paynegrey border-2 border-black rounded w-11/12 h-5/6 space-y-2 flex flex-wrap justify-center">
                <div className="bg-paynegrey"></div>
                <div className="bg-ash text-black border-2 border-black rounded w-8/12 h-32 gap-4 flex justify-center items-center">
                    <h1 className="font-heading text-8xl">DreamBound</h1>
                </div>
                <button onClick={startClick} className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Start Game</h2>
                </button>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Settings</h2>
                </button>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Contacts</h2>
                </button>
                <button className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center">
                    <h2 className="font-heading text-6xl">Exit Game</h2>
                </button>
            </div>
        </div>
    );
}

export default Menu;