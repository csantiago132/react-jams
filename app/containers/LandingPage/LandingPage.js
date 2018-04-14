import React from 'react';
import { Helmet } from 'react-helmet';
import './LandingPage.scss';

const LandingPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome to Bloc-Jams</title>
      <meta name="description" content="Bloc-Jams application homepage" />
    </Helmet>

    <main className="landing-page">
      <section className="landing-page__container">
        <h1 className="landing-page__hero-title">Turn the music up!</h1>

        <section className="landing-page__upsell">
          <article className="landing-page__upsell--music">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">
              The world is full of music; why should you have to listen to music
              that someone else chose?
            </p>
          </article>

          <article className="landing-page__upsell--unlimited">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <p className="point-description">
              No arbitrary limits. No distractions.
            </p>
          </article>

          <article className="landing-page__upsell--mobile">
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">
              Listen to your music on the go. This streaming service is
              available on all mobile platforms.
            </p>
          </article>
        </section>
      </section>
    </main>
  </React.Fragment>
);

export default LandingPage;
