import matchScore from './matchScore'

export default function categorizeItem(categoryDefinitions, categorizedItemIds, item, itemId) {
  if(item == null) return categorizedItemIds

  let categoryScores = Object.keys(categoryDefinitions).reduce((scores, cid) => {
    let cd = categoryDefinitions[cid]

    let excludeScore = cd.exclude.reduce((max, exclude) => {
      let score = matchScore(exclude, item.description)
      return score > max ? score : max;
    }, 0)

    scores[cid] = excludeScore > 0 
      ? 0 
      : cd.match.reduce((max, matcher) => {
          let score = matchScore(matcher, item.description)
          return score > max ? score : max;
        }, 0)

    return scores;
  }, {})

  let maxMatcherScore = Object.keys(categoryScores).reduce((maxScore, cid) => {
    return categoryScores[cid] > maxScore ? categoryScores[cid] : maxScore;
  }, 0)
  
  return Object.keys(categoryDefinitions).reduce((result, cid) => {
    let cd = categoryDefinitions[cid]
    let isFallthroughOtherCategory = cd.match.length == 0
    let isMatch = isFallthroughOtherCategory 
      ? maxMatcherScore == 0
      : maxMatcherScore > 0 && categoryScores[cid] == maxMatcherScore
    let itemIds = categorizedItemIds[cid] === undefined ? [] : categorizedItemIds[cid]
    result[cid] = isMatch ? [...itemIds, itemId] : itemIds
    return result
  }, {})
}
