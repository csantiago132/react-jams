import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AlbumPreview = (props) => {
  const { link, albumTitle, albumArtist, albumCover, totalSongs } = props;
  return (
    <Link to={link}>
      <img src={albumCover} alt={albumCover} />
      <div>{albumTitle}</div>
      <div>{albumArtist}</div>
      <div>{totalSongs} songs</div>
    </Link>
  );
};

AlbumPreview.propTypes = {
  link: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
  albumArtist: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  totalSongs: PropTypes.number.isRequired,
};

export default AlbumPreview;
