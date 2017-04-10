import categorizeItem from '../domain/categorizer'
import { categoryDefinitions } from '../domain/categoryDefinitions'

import { LOADING_SCREEN, LIST_SCREEN, ADD_SCREEN } from '../domain/screens'
import { 
  ITEMS_LOADED, 
  STATES_LOADED, 
  SHOW_LIST, 
  SHOW_ADD, 
  SET_ITEM, 
  SET_ITEM_COMPLETION 
} from './actions'

const initialState = { 
  screen: LOADING_SCREEN,
  items: {},
  itemsLoaded: false,
  itemCompletionStates: {},
  itemCompletionStatesLoaded: false,
  categorizedItemIds: {}
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ITEMS_LOADED:
      if(state.itemCompletionStatesLoaded)
        return Object.assign({}, state, { itemsLoaded: true, screen: LIST_SCREEN })
      else
        return Object.assign({}, state, { itemsLoaded: true })

    case STATES_LOADED:
      if(state.itemsLoaded)
        return Object.assign({}, state, { itemCompletionStatesLoaded: true, screen: LIST_SCREEN })
      else
        return Object.assign({}, state, { itemCompletionStatesLoaded: true })

    case SHOW_LIST:
      return Object.assign({}, state, { screen: LIST_SCREEN })
      
    case SHOW_ADD:
      return Object.assign({}, state, { screen: ADD_SCREEN })

    case SET_ITEM:
      let newItems = Object.assign({}, state.items, { [action.itemId]: action.item })
      return Object.assign({}, state, { 
        items: newItems,
        categorizedItemIds: categorizeItem(categoryDefinitions, state.categorizedItemIds, action.item, action.itemId)
      })

    case SET_ITEM_COMPLETION:
      let newStates = Object.assign({}, state.itemCompletionStates, { [action.itemId]: action.completed })
      return Object.assign({}, state, { 
        itemCompletionStates: newStates
      })

    default:
      return state
  }
}
