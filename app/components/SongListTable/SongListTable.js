import React from 'react';
import PropTypes from 'prop-types';
import { stringToTimeFormat } from '../../utils/stringToTimeFormat';

const SongListTable = (props) => {
  const { songNumber, songTitle, songDuration, onClick, className } = props;

  // formats time for songDuration prop
  const convertedSongTime = stringToTimeFormat(songDuration);

  return (
    <tr onClick={onClick}>
      <td className="song-actions">
        <button>
          <span className="song-number">{songNumber}</span>
          <span className={className} />
          {/* <span className={
            currentSong 
              ? 'player-controls__pause ion-pause'
              : 'player-controls__play ion-play'
          } /> */}
          <span className="ion-pause" />
        </button>
      </td>
      <td className="song-title">{songTitle}</td>
      <td className="song-duration">{convertedSongTime}</td>
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
