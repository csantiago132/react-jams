import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import albumData from './albumData';

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Library Page</title>
          <meta name="description" content="Bloc-Jams library page" />
        </Helmet>

        <main>
          <section className="library">
            {this.state.albums.map((album) => (
              <Link to={`/album/${album.slug}`} key={album.title}>
                {album.title}
                <img src={album.albumCover} alt={album.title} />
                <div>{album.title}</div>
                <div>{album.artist}</div>
                <div>{album.songs.length} songs</div>
              </Link>
            ))}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default LibraryPage;
