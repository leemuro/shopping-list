import { LIST_SCREEN, ADD_SCREEN, SHOW_LIST, SHOW_ADD } from '../actions'

const initialState = { 
  screen: LIST_SCREEN,
  items: [
    { id: "39203", description: "Milk", completed: false },
    { id: "39204", description: "Apples", completed: false },
    { id: "39205", description: "Steak", completed: false },
    { id: "39206", description: "Soup", completed: false },
    { id: "39207", description: "Butter", completed: true }
  ]
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
    default:
      return state
  }
}