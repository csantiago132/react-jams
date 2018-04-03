import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/*
testing Loaders for assets

import imagePath from '../../assets/images/album_covers/01.jpg';
import soundPath from '../../assets/music/blue.mp3'; 
*/

const LandingPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome</title>
      <meta name="description" content="Bloc-Jams application homepage" />
    </Helmet>

    <main>
      <section className="landing">Landing page will go here</section>
    </main>
  </React.Fragment>
);

export default LandingPage;
