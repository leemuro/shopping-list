import Gun from 'gun'
import { 
  LIST_SCREEN, 
  ADD_SCREEN, 
  SHOW_LIST, 
  SHOW_ADD, 
  ADD_ITEMS, 
  CLEAR_ITEMS, 
  TOGGLE_ITEM 
} from '../actions'

import categorizeItems from '../domain/categorizer'

const initialState = { 
  screen: LIST_SCREEN,
  items: {},
  itemCompletionStates: {},
  categorizedItems: {}
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_LIST:
      return Object.assign({}, state, {
        screen: LIST_SCREEN
      })
      
    case SHOW_ADD:
      return Object.assign({}, state, {
        screen: ADD_SCREEN
      })
      
    case ADD_ITEMS: 
      let newItemStates = action.newItems.reduce((obj, i) => {
        let itemId = Gun.text.random()
        obj.items[itemId] = { description: i }
        obj.itemCompletionStates[itemId] = false
        return obj
      }, { 
        items: state.items, 
        itemCompletionStates: state.itemCompletionStates 
      })

      return Object.assign({}, state, {
        items: newItemStates.items,
        itemCompletionStates: newItemStates.itemCompletionStates,
        categorizedItems: categorizeItems(newItemStates.items),
        screen: LIST_SCREEN
      })
      
    case CLEAR_ITEMS:
      return Object.assign({}, state, {
        items: {},
        categorizedItems: {}
      })
      
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        itemCompletionStates: Object.assign({}, state.itemCompletionStates, {
          [action.itemId]: !state.itemCompletionStates[action.itemId]
        })
      })
      
    default:
      return state
  }
}