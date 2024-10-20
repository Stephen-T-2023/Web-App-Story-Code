import React from 'react';
import { useAudio } from './AudioContext';

const AudioPlayer = () => {
  const { isPlaying, togglePlayPause, volume, handleVolumeChange } = useAudio();

  return (
    <div>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <div>
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
