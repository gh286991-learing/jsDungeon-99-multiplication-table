import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainPage from './containers/MainPage';
import configureStore from './store/configureStore';

import './styles.css';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
