export const LIST_SCREEN = 'LIST_SCREEN'
export const ADD_SCREEN = 'ADD_SCREEN'

export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_ADD = 'SHOW_ADD'
export const SET_ITEM = 'SET_ITEM'
export const SET_ITEM_COMPLETION = 'SET_ITEM_COMPLETION'

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