export const ITEMS_LOADED = 'ITEMS_LOADED'
export const STATES_LOADED = 'STATE_LOADED'
export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_ADD = 'SHOW_ADD'
export const SET_ITEM = 'SET_ITEM'
export const SET_ITEM_COMPLETION = 'SET_ITEM_COMPLETION'

export function itemsLoaded() {
  return { type: ITEMS_LOADED }
}

export function statesLoaded() {
  return { type: STATES_LOADED }
}

export function showList() {
  return { type: SHOW_LIST }
}

export function showAdd() {
  return { type: SHOW_ADD }
}

export function setItem(itemId, item) {
  return { type: SET_ITEM, itemId, item: item }
}

export function setItemCompletion(itemId, completed) {
  return { type: SET_ITEM_COMPLETION, itemId: itemId, completed: completed }
}
