import React from 'react';
import { Helmet } from 'react-helmet';

const LandingPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome</title>
      <meta name="description" content="Bloc-Jams application homepage" />
    </Helmet>

    <main>
      <section className="landing">
        <h1 className="hero-title">Turn the music up!</h1>
      </section>

      <section className="selling-points">
        <article className="point">
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">
            The world is full of music; why should you have to listen to music
            that someone else chose?
          </p>
        </article>

        <article className="point">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">
            No arbitrary limits. No distractions.
          </p>
        </article>

        <article className="point">
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">
            Listen to your music on the go. This streaming service is available
            on all mobile platforms.
          </p>
        </article>
      </section>
    </main>
  </React.Fragment>
);

export default LandingPage;
