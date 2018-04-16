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
          <article className="landing-page__upsell--music-tile">
            <span className="landing-page__upsell__number">001</span>
            <h2 className="landing-page__upsell__title">Choose your music</h2>
            <p className="landing-page__upsell__description">
              The world is full of music; why should you have to listen to music
              that someone else chose?
            </p>
          </article>

          <article className="landing-page__upsell--unlimited-tile">
            <span className="landing-page__upsell__number">002</span>
            <h2 className="landing-page__upsell__title">Unlimited streaming</h2>
            <p className="landing-page__upsell__description">
              No arbitrary limits. No distractions.
            </p>
          </article>

          <article className="landing-page__upsell--mobile-tile">
            <span className="landing-page__upsell__number">003</span>
            <h2 className="landing-page__upsell__title">Mobile enabled</h2>
            <p className="landing-page__upsell__description">
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
