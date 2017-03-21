import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers'
import App from './containers/App'

import { syncItems, syncCompletionStates } from './actions'
import { onItemsChanged, onItemCompletionStatesChanged } from './stores/listStore'
import bufferedSync from './util/bufferedSync'

let store = createStore(appReducer)

onItemsChanged(bufferedSync(store, syncItems))
onItemCompletionStatesChanged(bufferedSync(store, syncCompletionStates))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
