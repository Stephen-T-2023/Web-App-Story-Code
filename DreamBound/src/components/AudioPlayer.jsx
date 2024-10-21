import React from 'react';
import { useAudio } from './AudioContext';

const AudioPlayer = () => {
  const { isPlaying, togglePlayPause, volume, handleVolumeChange } = useAudio();

  return (
    <div className='bg-ash rounded-xl flex flex-wrap justify-center w-1/6 font-heading text-1xl'>
      <button onClick={togglePlayPause} className='border-2 border-black w-full'>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <div className='border-2 border-black w-full flex justify-center'>
        <label>Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
