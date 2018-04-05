import React from 'react';
import PropTypes from 'prop-types';

const SongListTable = (props) => {
  const { number, title, duration, audio } = props;

  return (
    <tr className="album-song">
      <td>{number}</td>
      <td>{title}</td>
      <td>{duration}</td>
      <td>
        <audio controls>
          <source src={audio} type="audio/mpeg" />

          {/* adding this for accesibility flag ESLint */}
          <track kind="captions" {...props} />
        </audio>
      </td>
    </tr>
  );
};

SongListTable.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default SongListTable;
