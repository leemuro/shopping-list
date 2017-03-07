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

const initialState = { 
  screen: LIST_SCREEN,
  items: {}
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
      let newItems = action.newItems.reduce((obj, i) => {
        obj[Gun.text.random()] = { description: i, completed: false }
        return obj
      }, state.items)
      return Object.assign({}, state, {
        items: newItems,
        screen: LIST_SCREEN
      })
    case CLEAR_ITEMS:
      return Object.assign({}, state, {
        items: {}
      })
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        items: {
          ...state.items,
          [action.itemId]: Object.assign({}, state.items[action.itemId], { 
            completed: !state.items[action.itemId].completed 
          })
        }
      })
    default:
      return state
  }
}