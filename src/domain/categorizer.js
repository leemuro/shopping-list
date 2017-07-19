import patternScore from './patternScore'

export default function categorizeItem(categories, categorizedItemIds, item, itemId) {
  if(item == null) return categorizedItemIds

  let categoryScores = Object.keys(categories).reduce((scores, cid) => {
    let cd = categories[cid]

    let excludeScore = cd.excludePatterns.reduce((max, pattern) => {
      let score = patternScore(pattern, item.description)
      return score > max ? score : max;
    }, 0)

    scores[cid] = excludeScore > 0 
      ? 0 
      : cd.includePatterns.reduce((max, pattern) => {
          let score = patternScore(pattern, item.description)
          return score > max ? score : max;
        }, 0)

    return scores;
  }, {})

  let maxPatternScore = Object.keys(categoryScores).reduce((maxScore, cid) => {
    return categoryScores[cid] > maxScore ? categoryScores[cid] : maxScore;
  }, 0)
  
  return Object.keys(categories).reduce((result, cid) => {
    let cd = categories[cid]
    let isFallthroughOtherCategory = cd.includePatterns.length == 0
    let isIncluded = isFallthroughOtherCategory 
      ? maxPatternScore == 0
      : maxPatternScore > 0 && categoryScores[cid] == maxPatternScore
    let itemIds = categorizedItemIds[cid] === undefined ? [] : categorizedItemIds[cid]
    result[cid] = isIncluded ? [...itemIds, itemId] : itemIds
    return result
  }, {})
}
