import * as firebase from 'firebase'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { showList, showAdd, setItem, setItemCompletion } from './actions'

const firebaseConfig = process.env.NODE_ENV === "development" 
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

export class RootStore {
    constructor() {
        this.store = createStore(rootReducer)
        firebase.initializeApp(firebaseConfig);
        
        this.listName = window.location.pathname.substr(1)
        this.itemsRef = firebase.database().ref(this.listName + '/items')
        this.statesRef = firebase.database().ref(this.listName + '/completionStates')
        
        let dispatch = this.store.dispatch
        this.itemsRef.on('child_added', function(item) { 
            dispatch(setItem(item.key, item.val())) 
        })
        this.itemsRef.on('child_changed', function(item) { 
            dispatch(setItem(item.key, item.val())) 
        })
        this.itemsRef.on('child_removed', function(item) { 
            dispatch(setItem(item.key, null)) 
        })
        
        this.statesRef.on('child_added', function(state) { 
            dispatch(setItemCompletion(state.key, state.val())) 
        })
        this.statesRef.on('child_changed', function(state) { 
            dispatch(setItemCompletion(state.key, state.val())) 
        })
        this.statesRef.on('child_removed', function(state) { 
            dispatch(setItemCompletion(state.key, state.val())) 
        })
    }

    showListScreen() {
        this.store.dispatch(showList())
    }
    
    showAddScreen() {
        this.store.dispatch(showAdd())
    }
    
    addItems(newItems) {
        let itemsRef = this.itemsRef
        let statesRef = this.statesRef
        newItems.forEach(item => {
            var itemRef = itemsRef.push()
            var stateRef = statesRef.push()
            itemRef.set({ description: item })
            stateRef.set(false)
        })
    }

    clearItems() {
        let itemsRef = this.itemsRef
        itemsRef.once('value', function(items) {
            items.forEach(function(item) {
                itemsRef.child(item.key).remove()
            });
        });
        
        let statesRef = this.statesRef
        statesRef.once('value', function(states) {
            states.forEach(function(state) {
                statesRef.child(state.key).remove()
            });
        });
    }

    toggleItem(itemId) {
        let statesRef = this.statesRef
        statesRef.child(itemId).once('value', function(state) {
            statesRef.child(itemId).set(!state.val())
        })
    }

    getReduxStore() {
        return this.store
    }
}

export let rootStore = new RootStore()