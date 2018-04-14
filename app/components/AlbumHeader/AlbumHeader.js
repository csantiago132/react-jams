import React from 'react';
import PropTypes from 'prop-types';
import './AlbumHeader.scss';

const AlbumHeader = (props) => {
  const { albumCover, title, artist, releaseInfo } = props.album;

  return (
    <header className="album-header">
      <img id="album-header__cover-art" src={albumCover} alt={albumCover} />
      <div className="album-details">
        <h1 id="album-details__album-title">{title}</h1>
        <h2 className="album-details__artist-name">{artist}</h2>
        <div id="album-details__release-year">{releaseInfo}</div>
      </div>
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
