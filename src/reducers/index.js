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
  rawItems: {},
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
      let newRawItems = action.newItems.reduce((obj, i) => {
        obj[Gun.text.random()] = { description: i, completed: false }
        return obj
      }, state.rawItems)
      return Object.assign({}, state, {
        rawItems: newRawItems,
        categorizedItems: categorizeItems(newRawItems),
        screen: LIST_SCREEN
      })
    case CLEAR_ITEMS:
      return Object.assign({}, state, {
        rawItems: {},
        categorizedItems: {}
      })
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        rawItems: {
          ...state.rawItems,
          [action.itemId]: Object.assign({}, state.rawItems[action.itemId], { 
            completed: !state.rawItems[action.itemId].completed 
          })
        },
        categorizedItems: {
          ...state.categorizedItems,
          [action.categoryName]: {
            ...state.categorizedItems[action.categoryName],
            [action.itemId]: Object.assign({}, state.categorizedItems[action.categoryName][action.itemId], { 
              completed: !state.categorizedItems[action.categoryName][action.itemId].completed 
            })
          }
        }
      })
    default:
      return state
  }
}