import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';

const SongListTable = ({ number, title, duration, onClick }) => {
  const convertedSongTime = stringToTimeFormat(duration);

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
      <td className="song-duration">{convertedSongTime}</td>
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
