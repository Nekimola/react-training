import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './reducers';

import Root from './root';

let store = createStore(todoApp);

render(
  <AppContainer>
    <Provider store={store}>
      <Root/>
    </Provider>
  </AppContainer>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept('./root.jsx', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Root/>
        </Provider>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
