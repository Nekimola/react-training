import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import Root from './root';

render( <AppContainer><Root/></AppContainer>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept('./root.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <Root/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
