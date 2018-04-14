import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';
import './PlayerBar.scss';

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
    <footer className="player-bar">
      <article className="player-bar__controller">
        <span className="player-controls__time current-time">
          {currentSongTime}
        </span>
        {/* eslint-disable react/jsx-no-duplicate-props */}
        <input
          type="range"
          className="player-bar__seek-bar"
          value={songCurrentTime / songDuration || 0}
          max="1"
          min="0"
          step="0.1"
          onChange={handleTimeChange}
        />
        {/* eslint-enable react/jsx-no-duplicate-props */}
        <span className="player-controls__time total-time">
          {currentSongDuration}
        </span>
      </article>

      <article className="player-bar__controller">
        <button
          className="player-controls__previous-song ion-skip-backward"
          onClick={prevSong}
        />
        <button
          className={
            isPlaying
              ? 'player-controls__pause ion-pause'
              : 'player-controls__play ion-play'
          }
          onClick={playPauseSong}
        />
        <button
          className="player-controls__next-song ion-skip-forward"
          onClick={nextSong}
        />
      </article>

      <article className="player-bar__controller">
        <span className="player-controls__volume ion-volume-low" />
        <input
          type="range"
          className="player-bar__seek-bar"
          value={songVolume}
          max="1"
          min="0"
          step="0.1"
          onChange={handleVolumeChange}
        />
        <span className="player-controls__volume ion-volume-high" />
      </article>
    </footer>
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
