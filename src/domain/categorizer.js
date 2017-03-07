import getCategories from './categories'
import filterObject from './filterObject'

function itemsInCategory(items, category, categories) {
    if(category.matchers.length > 0)
        return filterObject(items, i => itemMatches(i, category))
    else
        return itemsInNoCategory(items, categories)
}

function itemMatches(item, category) {
    let matches = category.matchers.some(m => itemMatchesWord(item, m))
    let excluded = category.exclusions.some(e => itemMatchesWord(item, e))
    return matches && !excluded
}

function itemMatchesWord(item, word) {
    let regex = new RegExp('(\\W|^)' + word.toLowerCase() + '(\\W|$)')
    return item.description.toLowerCase().match(regex)
}

function itemsInNoCategory(items, categories) {
    return filterObject(items, i => !categories.some(c => itemMatches(i, c, categories)))
}

export default function categorizeItems(items) {
    let categories = getCategories()
    let result = categories.map(c => {
        return {
            name: c.name,
            items: itemsInCategory(items, c, categories)
        }
    }) 
    return result.filter(x => Object.keys(x.items).length > 0)
}