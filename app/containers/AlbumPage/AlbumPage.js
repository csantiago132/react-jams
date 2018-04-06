import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import AlbumHeader from '../../components/AlbumHeader/Loadable';
import SongListTable from '../../components/SongListTable/Loadable';
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
      // to display current song playing
      currentSong: album.songs[0],
      isPlaying: false,
    };

    // not assigning audioElement to the component's state.
    // if passed, itll trigger a re-render of the DOM
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    // TODO: change this to switch statement
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      this.play();
    }
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
          <AlbumHeader album={this.state.album} />

          <section>
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
                {this.state.album.songs.map((song, i) => {
                  // make the array start at 1, not 0
                  this.state.album.songs.length == i++;

                  return (
                    <SongListTable
                      key={song.title}
                      number={i.toString()}
                      title={song.title}
                      duration={song.duration}
                    />
                  );
                })}
              </tbody>
            </table>
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
