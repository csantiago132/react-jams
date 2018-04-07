import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class PlayerBar extends React.Component {
  render() {
    const {
      isPlaying,
      playPauseSong,
      prevSong,
      nextSong,
      currentTime,
      duration,
      handleTimeChange,
    } = this.props;

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
          <div className="current-time">{currentTime}</div>
          {/* eslint-disable react/jsx-no-duplicate-props */}
          <input
            type="range"
            className="seek-bar"
            value="0"
            value={currentTime / duration || 0}
            max="1"
            min="0"
            step="0.1"
            onChange={handleTimeChange}
          />
          {/* eslint-enable react/jsx-no-duplicate-props */}
          <div className="total-time">{duration}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low" />
          {/* <input type="range" className="seek-bar" value="80" /> */}
          <div className="icon ion-volume-high" />
        </section>
      </React.Fragment>
    );
  }
}

PlayerBar.propTypes = {
  isPlaying: PropTypes.any,
  playPauseSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  currentTime: PropTypes.node,
  duration: PropTypes.node,
  handleTimeChange: PropTypes.func.isRequired,
};

export default PlayerBar;
