import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AlbumPreview.scss';
const AlbumPreview = (props) => {
  const { link, albumTitle, albumArtist, albumCover, totalSongs } = props;
  return (
    <article>
      <Link to={link} className="album-library-preview">
        <img
          className="album-library-preview__album-image"
          src={albumCover}
          alt={albumCover}
        />
        <span className="album-library-preview__album-details">
          <span className="album-library-preview__album-details__album-title">
            Album Name: {albumTitle}
          </span>
          <span className="album-library-preview__album-details__artist-name">
            Album Name: {albumArtist}
          </span>
          <span className="album-library-preview__album-details__total-songs">
            Album Name: {totalSongs}
          </span>
        </span>
      </Link>
    </article>
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
