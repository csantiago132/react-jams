import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// testing Loaders for assets
import imagePath from '../../assets/images/album_covers/01.jpg';
import soundPath from '../../assets/music/blue.mp3';

const HomePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome</title>
      <meta name="description" content="Bloc-James application homepage" />
    </Helmet>

    <main>
      <img src={imagePath} alt="album cover" />

      <audio controls>
        <source src={soundPath} type="audio/mpeg" />
        <track kind="captions" src="sampleCaptions.vtt" srcLang="en" />
      </audio>

      <h2>testing From the Homepage</h2>
      <p>test</p>
    </main>
  </React.Fragment>
);

export default HomePage;
