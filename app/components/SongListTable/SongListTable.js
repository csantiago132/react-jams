import React from 'react';
import PropTypes from 'prop-types';

const SongListTable = (props) => {
  const { songNumber, title, duration, audioSrc } = props;

  return (
    <tr>
      <td>{songNumber}</td>
      <td>{title}</td>
      <td>{duration}</td>
      <td>{audioSrc}</td>
    </tr>
  );
};

SongListTable.propTypes = {
  songNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default SongListTable;
