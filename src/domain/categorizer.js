export default function categorizeItem(categoryDefinitions, categorizedItemIds, item, itemId) {
  if(item == null) return categorizedItemIds
  
  return Object.keys(categoryDefinitions).reduce((result, cid) => {
    let cd = categoryDefinitions[cid]
    let isMatch = (cd.match.length === 0 && itemMatchesNoCategory(item, categoryDefinitions)) || itemMatches(item, cd)
    let itemIds = categorizedItemIds[cid] === undefined ? [] : categorizedItemIds[cid]
    result[cid] = isMatch ? [...itemIds, itemId] : itemIds
    return result
  }, {})
}

function itemMatches(item, categoryDefinition) {
  let matches = categoryDefinition.match.some(m => itemMatchesWord(item, m))
  let excluded = categoryDefinition.exclude.some(e => itemMatchesWord(item, e))
  return matches && !excluded
}

function itemMatchesWord(item, word) {
  let regex = new RegExp('(\\W|^)' + word.toLowerCase() + '(\\W|$)')
  return item.description.toLowerCase().match(regex)
}

function itemMatchesNoCategory(item, categoryDefinitions) {
  return !Object.keys(categoryDefinitions).some(cid => itemMatches(item, categoryDefinitions[cid]))
}
