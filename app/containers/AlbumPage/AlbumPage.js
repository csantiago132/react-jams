import React from 'react';
import { Helmet } from 'react-helmet';

const AlbumPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Album Page</title>
      <meta name="description" content="Bloc-Jams library page" />
    </Helmet>

    <main>
      <section className="library">Album page will go here</section>
    </main>
  </React.Fragment>
);

export default AlbumPage;
