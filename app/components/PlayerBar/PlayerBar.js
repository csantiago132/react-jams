import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class PlayerBar extends React.Component {
  render() {
    const { isPlaying, onClick } = this.props;
    return (
      <React.Fragment>
        <section id="buttons">
          <button id="previous">
            <span className="ion-skip-backward" />
          </button>
          <button id="play-pause" onClick={onClick}>
            <span className={isPlaying ? 'ion-pause' : 'ion-play'} />
          </button>
          <button id="next">
            <span className="ion-skip-forward" />
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low" />
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high" />
        </section>
      </React.Fragment>
    );
  }
}

PlayerBar.propTypes = {
  isPlaying: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PlayerBar;
