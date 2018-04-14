import React from 'react';
import PropTypes from 'prop-types';
import './AlbumHeader.scss';

const AlbumHeader = (props) => {
  const { albumCover, title, artist, releaseInfo } = props.album;

  return (
    <header className="album-header">
      <img
        className="album-header__cover-art"
        src={albumCover}
        alt={albumCover}
      />
      <article className="album-details">
        <h1 className="album-details__album-title">{title}</h1>
        <h2 className="album-details__artist-name">By: {artist}</h2>
        <h3 className="album-details__release-year">Released: {releaseInfo}</h3>
      </article>
    </header>
  );
};

AlbumHeader.propTypes = {
  album: PropTypes.shape({
    albumCover: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    releaseInfo: PropTypes.string,
  }).isRequired,
};

export default AlbumHeader;
