import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from 'containers/LandingPage/Loadable';
import LibraryPage from 'containers/LibraryPage/Loadable';
import AlbumPage from 'containers/AlbumPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navigation from 'components/Navigation/Navigation';

import { NavigationLinks } from './navigation-links';

const App = () => (
  <React.Fragment>
    <Helmet titleTemplate="%s - Bloc Jams" defaultTitle="Bloc Jams">
      <meta name="description" content="A clone of the Spotify application" />
    </Helmet>
    <Navigation items={NavigationLinks} />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/library" component={LibraryPage} />
      <Route path="/album/:slug" component={AlbumPage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
  </React.Fragment>
);

export default App;
