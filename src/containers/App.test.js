import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { rootStore } from '../store'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  let store = rootStore.getReduxStore()

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
