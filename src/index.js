// Modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './App';

// Services
// import registerServiceWorker from './registerServiceWorker';
import store from './store';

const AppElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(AppElement, document.getElementById('root'));

// registerServiceWorker();
