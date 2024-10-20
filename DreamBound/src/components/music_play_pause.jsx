import { useState, useEffect} from 'react';

const Music = () => {

    const audiopath = '../src/assets/background_loop.mp3'
    
    const [audio] = useState(new Audio(audiopath))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
        },
        [playing, audio])

    useEffect(() => {
        audio.addEventListener('ended', () => {
            audio.play()
        })
    },
    [audio])

    return (
        <button onClick={toggle} className="bg-whitesmoke rounded-xl font-heading text-2xl w-2/12 h-8">Play / Pause</button>
    )
}

export default Music;