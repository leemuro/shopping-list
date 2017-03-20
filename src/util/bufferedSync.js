import debounce from './debounce'

export default function bufferedSync(store, syncAction) {
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