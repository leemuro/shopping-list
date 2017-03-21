import Gun from 'gun'

const gun = Gun(location.origin + '/gun')
const gunList = gun.get(window.location.hash.substr(1));

export function addItems(newItems) {
    let added = newItems.reduce((o, i) => {
        let itemId = Gun.text.random()
        o.items[itemId] = { description: i }
        o.completionStates[itemId] = false
        return o
    }, { items: {}, completionStates: {} })
    
    gunList.get('items').put(added.items)
    gunList.get('itemCompletionStates').put(added.completionStates)
}

export function clearItems() {
    gunList.get('items').val(items => {
        Object.keys(items).forEach(itemId => {
            gunList.get('items').path(itemId).put(null)
        })
    })
}

export function toggleItem(itemId) {
    gunList.get('itemCompletionStates').path(itemId).val(completed => {
        gunList.get('itemCompletionStates').path(itemId).put(!completed)
    })
}

export function onItemsChanged(callback) {
    gunList.path('items').map(callback)
}

export function onItemCompletionStatesChanged(callback) {
    gunList.path('itemCompletionStates').map(callback)
}
