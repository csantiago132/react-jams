import React from 'react';
import { Helmet } from 'react-helmet';

const LibraryPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Library Page</title>
      <meta name="description" content="Bloc-Jams library page" />
    </Helmet>

    <main>
      <section className="library">Library will go here</section>
    </main>
  </React.Fragment>
);

export default LibraryPage;
