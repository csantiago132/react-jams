import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import AlbumHeader from '../../components/AlbumHeader/Loadable';
import SongListTable from '../../components/SongListTable/Loadable';
import PlayerBar from '../../components/PlayerBar/Loadable';
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
    const { currentSong, isPlaying } = this.state;

    const isSameSong = currentSong === song;
    // TODO: change this to switch statement
    if (isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const { currentSong } = this.state;
    const { songs } = this.state.album;

    // checks current index of the song
    const currentIndex = songs.findIndex((song) => currentSong === song);

    // avoids method of passing the first array index
    // TL DR: makes sure that we cant pass the first song in the array
    const newIndex = Math.max(0, currentIndex - 1);

    // sets new song based on index
    const newSong = songs[newIndex];

    // calls methods above with new params
    this.setSong(newSong);
    this.play(newSong);
  }

  render() {
    const { title, artist, releaseInfo, songs } = this.state.album;
    const { isPlaying, currentSong } = this.state;

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
                {songs.map((song, i) => {
                  // make the array start at 1, not 0
                  songs.length == i++;

                  return (
                    <SongListTable
                      key={song.title}
                      number={i.toString()}
                      title={song.title}
                      duration={song.duration}
                      onClick={() => this.handleSongClick(song)}
                    />
                  );
                })}
              </tbody>
            </table>
            <PlayerBar
              isPlaying={isPlaying}
              currentSong={currentSong}
              PlayPauseSong={() => this.handleSongClick(currentSong)}
              PrevSong={() => this.handlePrevClick()}
            />
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
