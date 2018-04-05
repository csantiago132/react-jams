import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import albumData from '../../setup/data/data';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    const album = albumData.find((album) => album.slug === match.params.slug);

    this.state = {
      album: album,
    };
  }

  render() {
    const { albumCover, title, artist, releaseInfo } = this.state.album;

    return (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={`${title} album page, album produced by ${artist}, released on ${releaseInfo}`}
          />
        </Helmet>

        <main>
          <section id="album-info">
            <img id="album-cover-art" src={albumCover} alt={albumCover} />
            <div className="album-details">
              <h1 id="album-title">{title}</h1>
              <h2 className="artist">{artist}</h2>
              <div id="release-info">{releaseInfo}</div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

AlbumPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default AlbumPage;
