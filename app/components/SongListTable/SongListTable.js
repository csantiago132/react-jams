import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';
import './SongList.scss';

const SongListTable = (props) => {
  const { songNumber, songTitle, songDuration, onClick, className } = props;

  // formats time for songDuration prop
  const convertedSongTime = stringToTimeFormat(songDuration);

  return (
    <tr className="song-list" onClick={onClick}>
      <td className="song-list__song-controls">
        <span className={`song-list__song-controls__song-status${className}`} />
        <span className="song-list__show-play-icon">
          <span className="ion-play" />
        </span>
        <span className="song-list__song-controls__song-number">
          {songNumber}
        </span>
      </td>
      <td className="song-list__song-title">{songTitle}</td>
      <td className="song-list__song-duration">{convertedSongTime}</td>
    </tr>
  );
};

SongListTable.propTypes = {
  className: PropTypes.string.isRequired,
  songNumber: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  songDuration: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SongListTable;
