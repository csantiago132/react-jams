import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/* 
* since theres no state to pass, 
* will leave as stateless function
*/
const AlbumPage = (props) => {
  const { match } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>Album Page</title>
        <meta name="description" content="Bloc-Jams library page" />
      </Helmet>

      <main>
        <section className="album">
          {match.params.slug} Album page will go here
        </section>
      </main>
    </React.Fragment>
  );
};

AlbumPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default AlbumPage;
