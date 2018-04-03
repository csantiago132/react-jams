import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

const App = () => (
  <React.Fragment>
    <Helmet
      titleTemplate="%s - Bloc Jams"
      defaultTitle="Bloc Jams"
    >
      <meta name="description" content="A clone of the Spotify application" />
    </Helmet>
    
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/404' exact={true} component={NotFoundPage} />
      <Redirect from='*' to='/404' />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
