import Gun from 'gun'
import { 
  LIST_SCREEN, 
  ADD_SCREEN, 
  SHOW_LIST, 
  SHOW_ADD, 
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

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_LIST:
      return Object.assign({}, state, { screen: LIST_SCREEN })
      
    case SHOW_ADD:
      return Object.assign({}, state, { screen: ADD_SCREEN })
      
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