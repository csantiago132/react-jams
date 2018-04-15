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
      currentSong: album.songs[0],
      isPlaying: false,
      currentTime: 0,
      volume: 0.3,
      duration: album.songs[0].duration,
    };

    // not assigning audioElement to the component's state.
    // if passed, itll trigger a re-render of the DOM
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;

    // separating & binding eventListeners that set state
    // out of componentDidMount, placing it triggers issue #19
    // https://github.com/enrique0921/bloc-jams/issues/19
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
  }

  componentDidMount() {
    // makes page starts at the top, fixes issue #28
    // https://github.com/enrique0921/bloc-jams/issues/28
    window.scrollTo(0, 0);
    this.audioElement.addEventListener('timeupdate', this.onTimeUpdate);
    this.audioElement.addEventListener('durationchange', this.onDurationChange);
  }

  componentWillUnmount() {
    // to remove event listeners when the component is unmounted.
    // if not, they'll continue to run even after the component is no longer on the page,
    // and any calls the component makes to setState() will result in an error.
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.onTimeUpdate);
    this.audioElement.removeEventListener(
      'durationchange',
      this.onDurationChange
    );
  }

  onTimeUpdate() {
    this.setState({ currentTime: this.audioElement.currentTime });
  }

  onDurationChange() {
    this.setState({ duration: this.audioElement.duration });
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

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
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
    const { currentSong, album: { songs } } = this.state;

    // checks current index of the song
    const currentIndex = songs.findIndex((song) => currentSong === song);

    // Math.max() makes sure that we cant pass further than
    // the first song in the array
    const newIndex = Math.max(0, currentIndex - 1);

    // sets new song based on index
    const newSong = songs[newIndex];

    // calls methods above with new params
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const { currentSong, album: { songs } } = this.state;

    // checks current index of the song
    const currentIndex = songs.findIndex((song) => currentSong === song);

    // Math.min() makes sure that we cant pass further than
    // the last song in the array
    const newIndex = Math.min(songs.length - 1, currentIndex + 1);

    // sets new song based on index
    const newSong = songs[newIndex];

    // calls methods above with new params
    this.setSong(newSong);
    this.play(newSong);
  }

  // sets play-pause classNames
  songClass(song) {
    if (this.state.currentSong === song) {
      if (this.state.isPlaying) {
        return 'player-controls__pause ion-pause';
      } else {
        return 'player-controls__play ion-play';
      }
    }
    return 'player-controls__pause';
  }

  render() {
    const {
      isPlaying,
      currentSong,
      volume,
      album: { title, artist, releaseInfo, songs },
    } = this.state;

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
          <AlbumHeader
            album={this.state.album}
            totalSongs={this.state.album.songs.length}
          />

          <section>
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
                {songs.map((song, i) => {
                  // makes the array start at 1, not 0
                  songs.length == i++;

                  return (
                    <SongListTable
                      key={song.title}
                      className={this.songClass(song)}
                      songNumber={i.toString()}
                      songTitle={song.title}
                      songDuration={song.duration}
                      onClick={() => this.handleSongClick(song)}
                    />
                  );
                })}
              </tbody>
            </table>
          </section>
          <PlayerBar
            isPlaying={isPlaying}
            currentSong={currentSong}
            playPauseSong={() => this.handleSongClick(currentSong)}
            prevSong={() => this.handlePrevClick()}
            nextSong={() => this.handleNextClick()}
            songVolume={volume}
            songCurrentTime={this.audioElement.currentTime}
            songDuration={this.audioElement.duration}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
          />
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
