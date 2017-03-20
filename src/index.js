import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Gun from 'gun'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createAppReducer from './reducers'
import App from './containers/App'
import { syncItems, syncCompletionStates } from './actions'
import bufferedSync from './util/bufferedSync'

const gunPath = location.origin + '/gun'
const gun = Gun(gunPath)
const gunList = gun.get(window.location.hash.substr(1));

let appReducer = createAppReducer(gunList)
let store = createStore(appReducer)

gunList.path('items').map(bufferedSync(store, syncItems))
gunList.path('itemCompletionStates').map(bufferedSync(store, syncCompletionStates))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
