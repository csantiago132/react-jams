import React from 'react';
import PropTypes from 'prop-types';

const SongListTable = (props) => {
  const { number, title, duration } = props;

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
    <tr className="album-song">
      <td>{number}</td>
      <td>{title}</td>
      <td>{convertTime}</td>
    </tr>
  );
};

SongListTable.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default SongListTable;
