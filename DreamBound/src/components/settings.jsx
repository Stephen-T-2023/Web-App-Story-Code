import { useState, useEffect} from 'react';

export default function Settings({onClose, visible}) {

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

    if(!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-wrap justify-center items-center">
            <div className="bg-ash rounded w-10/12 h-4/6">
                <div>Settings</div>
                {/* <button onClick={toggle} className="bg-whitesmoke rounded-xl font-heading text-2xl w-2/12 h-8">Play / Pause</button> */}
                <button onClick={onClose} className="w-full">Exit Settings</button>
            </div>
        </div>
    );
}