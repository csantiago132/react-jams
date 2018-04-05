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
    return (
      <React.Fragment>
        <Helmet>
          <title>Library Page</title>
          <meta name="description" content="Bloc-Jams library page" />
        </Helmet>

        <main>
          <section className="library">
            {this.state.albums.map((album) => (
              <AlbumPreview
                key={album.title}
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
