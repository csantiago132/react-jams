import React from 'react';
import { Helmet } from 'react-helmet';
import albumData from '../../setup/data/data';
import AlbumPreview from '../../components/AlbumPreview/Loadable';

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData,
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>Library Page</title>
          <meta name="description" content="Bloc-Jams library page" />
        </Helmet>

        <main>
          <header>
            <h1>Library</h1>
          </header>
          <section className="library">
            {albums.map((album, i) => (
              <AlbumPreview
                key={i} // eslint-disable-line react/no-array-index-key
                link={`/album/${album.slug}`}
                albumTitle={album.title}
                albumArtist={album.artist}
                albumCover={album.albumCover}
                totalSongs={album.songs.length}
              />
            ))}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default LibraryPage;
