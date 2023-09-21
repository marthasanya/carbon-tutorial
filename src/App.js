import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import ParklinkHeader from './components/ParklinkHeader';
import HowitworksPage from './content/HowitworksPage';
import PaymentsolutionsPage from './content/PaymentsolutionsPage';
import SupportPage from './content/SupportPage';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Theme theme="g100">
            <ParklinkHeader />
          </Theme>
          <Content>
            <Switch>
              <Route exact path="/" component={HowitworksPage} />
              <Route path="/pay" component={PaymentsolutionsPage} />
              <Route path="/support" component={SupportPage} />
            </Switch>
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
