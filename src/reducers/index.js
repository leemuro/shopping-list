import Gun from 'gun'
import { 
  LIST_SCREEN, 
  ADD_SCREEN, 
  SHOW_LIST, 
  SHOW_ADD, 
  ADD_ITEMS, 
  CLEAR_ITEMS, 
  TOGGLE_ITEM,
  SYNC_ITEMS,
  SYNC_COMPLETION_STATES 
} from '../actions'

import filterObject from '../domain/filterObject'
import categorizeItems from '../domain/categorizer'

const initialState = { 
  screen: LIST_SCREEN,
  items: {},
  itemCompletionStates: {},
  categorizedItems: {}
}

export default function createAppReducer(gunList) {
  return function appReducer(state = initialState, action) {
    switch(action.type) {
      case SHOW_LIST:
        return Object.assign({}, state, { screen: LIST_SCREEN })
        
      case SHOW_ADD:
        return Object.assign({}, state, { screen: ADD_SCREEN })
        
      case ADD_ITEMS: 
        let added = action.newItems.reduce((o, i) => {
          let itemId = Gun.text.random()
          o.items[itemId] = { description: i }
          o.completionStates[itemId] = false
          return o
        }, { items: {}, completionStates: {} })
        
        gunList.get('items').put(added.items)
        gunList.get('itemCompletionStates').put(added.completionStates)

        return Object.assign({}, state, { screen: LIST_SCREEN })
        
      case CLEAR_ITEMS:
        Object.keys(state.items).forEach(itemId => {
          gunList.get('items').path(itemId).put(null)
        })
        return state
        
      case TOGGLE_ITEM:
        let completed = state.itemCompletionStates[action.itemId];
        gunList.get('itemCompletionStates').path(action.itemId).put(!completed)
        return state
        
      case SYNC_ITEMS: 
        let newItems = Object.assign({}, state.items, action.items)
        let filteredItems = filterObject(newItems, i => i != null)
        return Object.assign({}, state, { 
          items: filteredItems,
          categorizedItems: categorizeItems(filteredItems)
        })

      case SYNC_COMPLETION_STATES:
        let newCompletionStates = Object.assign({}, state.itemCompletionStates, action.itemCompletionStates)
        let filteredCompletionStates = filterObject(newCompletionStates, i => i != null)
        return Object.assign({}, state, { itemCompletionStates: filteredCompletionStates })
        
      default:
        return state
    }
  }
}