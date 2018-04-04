import React from 'react';
import { Helmet } from 'react-helmet';
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
          <section className="library">Library will go here</section>
        </main>
      </React.Fragment>
    );
  }
}

export default LibraryPage;
