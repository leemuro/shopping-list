export const LIST_SCREEN = 'LIST_SCREEN'
export const ADD_SCREEN = 'ADD_SCREEN'

export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_ADD = 'SHOW_ADD'

export function showList() {
    return { type: SHOW_LIST }
}

export function showAdd() {
    return { type: SHOW_ADD }
}