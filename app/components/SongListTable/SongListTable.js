import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';

const SongListTable = (props) => {
  const { songNumber, songTitle, songDuration, onClick } = props;

  // formats time for songDuration prop
  const convertedSongTime = stringToTimeFormat(songDuration);

  return (
    <tr className="song" onClick={onClick}>
      <td className="song-actions">
        <button>
          <span className="song-number">{songNumber}</span>
          <span className="ion-play" />
          <span className="ion-pause" />
        </button>
      </td>
      <td className="song-title">{songTitle}</td>
      <td className="song-duration">{convertedSongTime}</td>
    </tr>
  );
};

SongListTable.propTypes = {
  songNumber: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  songDuration: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SongListTable;
