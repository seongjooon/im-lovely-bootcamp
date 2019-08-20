import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Route path='/:filter?' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
