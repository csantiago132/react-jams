import React from 'react';
import { Helmet } from 'react-helmet';

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
