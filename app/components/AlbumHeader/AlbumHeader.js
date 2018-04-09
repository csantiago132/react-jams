import React from 'react';
import PropTypes from 'prop-types';

const AlbumHeader = (props) => {
  const { albumCover, title, artist, releaseInfo } = props.album;

  return (
    <header className="album-header">
      <img id="album-cover-art" src={albumCover} alt={albumCover} />
      <div className="album-details">
        <h1 id="album-title">{title}</h1>
        <h2 className="artist">{artist}</h2>
        <div id="release-info">{releaseInfo}</div>
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
