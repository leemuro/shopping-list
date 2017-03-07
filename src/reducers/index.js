import Gun from 'gun'
import { LIST_SCREEN, ADD_SCREEN, SHOW_LIST, SHOW_ADD, ADD_ITEMS } from '../actions'

const initialState = { 
  screen: LIST_SCREEN,
  items: []
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
      let newItems = action.newItems.map(i => {
        return { id: Gun.text.random(), description: i, completed: false }
      })
      return Object.assign({}, state, {
        items: state.items.concat(newItems),
        screen: LIST_SCREEN
      })
    default:
      return state
  }
}