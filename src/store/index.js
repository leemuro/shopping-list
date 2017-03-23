import * as firebase from 'firebase'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { setItem, setItemCompletion } from '../actions'

let listName = window.location.hash.substr(1)

export function addItems(newItems) {
    let db = firebase.database()
    let listRef = db.ref(listName + '/items')
    let statesRef = db.ref(listName + '/completionStates')
    newItems.forEach(item => {
        var itemRef = listRef.push()
        var stateRef = statesRef.push()
        itemRef.set({ description: item })
        stateRef.set(false)
    })
}

export function clearItems() {
    let db = firebase.database()
    let listRef = db.ref(listName + '/items')
    listRef.once('value', function(items) {
        items.forEach(function(item) {
            listRef.child(item.key).remove()
        });
    });
}

export function toggleItem(itemId) {
    let db = firebase.database()
    let statesRef = db.ref(listName + '/completionStates')
    statesRef.child(itemId).once('value', function(state) {
        statesRef.child(itemId).set(!state.val())
    })
}

export function initializeStore() {
    let store = createStore(rootReducer)
    
    let firebaseConfig = process.env.NODE_ENV === "development" 
        ? { apiKey: "AIzaSyBMws4TvI3dnqdeuZxjQw9KZHB5aVio4mA",
            authDomain: "ptd-shopping-list-dev.firebaseapp.com",
            databaseURL: "https://ptd-shopping-list-dev.firebaseio.com",
            storageBucket: "ptd-shopping-list-dev.appspot.com",
            }
        : { apiKey: "AIzaSyCdyGTYjRXabXljWbVm3d7pyd3dZcWGR2g",
            authDomain: "ptd-shopping-list.firebaseapp.com",
            databaseURL: "https://ptd-shopping-list.firebaseio.com",
            storageBucket: "ptd-shopping-list.appspot.com",
            }
        
    firebase.initializeApp(firebaseConfig);
    
    let itemsRef = firebase.database().ref(listName + '/items')
    let statesRef = firebase.database().ref(listName + '/completionStates')
    
    itemsRef.on('child_added', function(item) { store.dispatch(setItem(item.key, item.val())) })
    itemsRef.on('child_changed', function(item) { store.dispatch(setItem(item.key, item.val())) })
    itemsRef.on('child_removed', function(item) { store.dispatch(setItem(item.key, null)) })
    
    statesRef.on('child_added', function(state) { store.dispatch(setItemCompletion(state.key, state.val())) })
    statesRef.on('child_changed', function(state) { store.dispatch(setItemCompletion(state.key, state.val())) })
    statesRef.on('child_removed', function(state) { store.dispatch(setItemCompletion(state.key, state.val())) })

    return store
}