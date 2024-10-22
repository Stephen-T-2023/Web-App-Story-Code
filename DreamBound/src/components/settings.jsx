import AudioPlayer from "./AudioPlayer";

export default function Settings({onClose, visible}) {

    if(!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-wrap justify-center items-center">
            <div className="bg-ash rounded w-10/12 h-4/6 flex flex-wrap justify-center items-center">
                <div className="font-heading text-6xl w-full flex justify-center">Settings</div>
                <div className="font-heading text-6xl w-full flex justify-center">Audio Testing</div>
                <AudioPlayer/>
                <button onClick={onClose} className="w-full">Exit Settings</button>
            </div>
        </div>
    );
}