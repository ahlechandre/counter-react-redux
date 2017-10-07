// Modules
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

// Services
import reducerCounter from './reducers';

// Components
import App from './App';

const app = Express();
const port = 3000;

const renderFullpage = (html, preloadedState) => (`
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#000000"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/favicon.ico"><title>React App</title></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root">${html}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script><script type="text/javascript" src="/static/js/main.411f6812.js"></script></body></html>
`);

const handleRender = (req, res) => {
  const store = createStore(reducerCounter);
  const AppElement = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const html = renderToString(AppElement);
  const preloadedState = store.getState();

  res.send(renderFullpage(html, preloadedState));
};

app.use(Express.static('build'));

app.use(handleRender);

app.listen(port);
