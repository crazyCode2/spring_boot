import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { basename } from 'utils/constants';
import HomePage from 'apps/homePage/index';

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <Switch>
          <Route path="/">
            <Switch>
              <Route path="/homePage" component={HomePage} />
              <Redirect from="/" to="/homePage" />
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}