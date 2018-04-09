import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';

const PlayerBar = (props) => {
  const {
    isPlaying,
    playPauseSong,
    prevSong,
    nextSong,
    songCurrentTime,
    songDuration,
    handleTimeChange,
    songVolume,
    handleVolumeChange,
  } = props;

  // formats current time for selected song
  const currentSongTime = stringToTimeFormat(songCurrentTime);

  // formats total time for selected song
  const currentSongDuration = stringToTimeFormat(songDuration);

  return (
    <React.Fragment>
      <section id="buttons">
        <button id="previous" onClick={prevSong}>
          <span className="ion-skip-backward" />
        </button>
        <button id="play-pause" onClick={playPauseSong}>
          <span className={isPlaying ? 'ion-pause' : 'ion-play'} />
        </button>
        <button id="next" onClick={nextSong}>
          <span className="ion-skip-forward" />
        </button>
      </section>
      <section id="time-control">
        <div className="current-time">{currentSongTime}</div>
        {/* eslint-disable react/jsx-no-duplicate-props */}
        <input
          type="range"
          className="seek-bar"
          value={songCurrentTime / songDuration || 0}
          max="1"
          min="0"
          step="0.1"
          onChange={handleTimeChange}
        />
        {/* eslint-enable react/jsx-no-duplicate-props */}
        <div className="total-time">{currentSongDuration}</div>
      </section>
      <section id="volume-control">
        <div className="icon ion-volume-low" />
        <input
          type="range"
          className="seek-bar"
          value={songVolume}
          max="1"
          min="0"
          step="0.1"
          onChange={handleVolumeChange}
        />
        <div className="icon ion-volume-high" />
      </section>
    </React.Fragment>
  );
};

PlayerBar.propTypes = {
  isPlaying: PropTypes.bool,
  playPauseSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  songCurrentTime: PropTypes.node,
  songVolume: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  songDuration: PropTypes.number,
  handleTimeChange: PropTypes.func.isRequired,
  handleVolumeChange: PropTypes.func.isRequired,
};

export default PlayerBar;
