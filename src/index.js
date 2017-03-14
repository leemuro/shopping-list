import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Gun from 'gun'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createAppReducer from './reducers'
import App from './containers/App'
import { syncItems, syncCompletionStates } from './actions'

const gun = Gun('http://localhost:8080/gun');
const gunList = gun.get(window.location.pathname.substr(1));

let appReducer = createAppReducer(gunList)
let store = createStore(appReducer)

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function createBufferedSync(syncAction) {
  var buffer = {}

  var dispatchSync = debounce(function() {
    store.dispatch(syncAction(buffer))
    buffer = {}
  }, 50)

  return function(item, key) {
    buffer = Object.assign({}, buffer, {[key]: item})
    dispatchSync()
  }
}

gunList.path('items').map(createBufferedSync(syncItems))
gunList.path('itemCompletionStates').map(createBufferedSync(syncCompletionStates))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
