import React from 'react';
import PropTypes from 'prop-types';

const SongListTable = (props) => {
  const { number, title, duration, onClick } = props;

  // using Date native library
  // we need a date before converting,
  // pasisng as null
  const getTime = new Date(null);
  // passing props.duration
  // as value to parse
  getTime.setSeconds(duration);
  // converting time toString,
  // using RegEx to remove extra zeroes
  const convertTime = getTime
    .toISOString()
    .substr(11, 8)
    .replace(/^[0:]+/, '');

  return (
    <tr className="song" onClick={onClick}>
      <td className="song-actions">
        <button>
          <span className="song-number">{number}</span>
          <span className="ion-play" />
          <span className="ion-pause" />
        </button>
      </td>
      <td className="song-title">{title}</td>
      <td className="song-duration">{convertTime}</td>
    </tr>
  );
};

SongListTable.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SongListTable;
