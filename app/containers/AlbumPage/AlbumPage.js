import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import AlbumHeader from '../../components/AlbumHeader/Loadable';
import albumData from '../../setup/data/data';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    // find the information that goes on this page
    // setting it based on the slug and returning
    // an object to the state
    const album = albumData.find((album) => album.slug === match.params.slug);

    this.state = {
      album: album,
    };
  }

  render() {
    const { title, artist, releaseInfo } = this.state.album;

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
            <AlbumHeader album={this.state.album} />
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
