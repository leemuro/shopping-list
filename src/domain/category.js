export default function category(includePatterns, excludePatterns) {
  includePatterns = includePatterns || []
  excludePatterns = excludePatterns || []
  
  return { 
    includePatterns: includePatterns,
    excludePatterns: excludePatterns,

    include: function(pattern) {
      return category([...includePatterns, pattern], excludePatterns)
    },

    exclude: function(pattern) {
      return category(includePatterns, [...excludePatterns, pattern])
    },

    includeCategory: function(includedCategory) {
      return category(
        [...includePatterns, ...includedCategory.includePatterns], 
        [...excludePatterns, ...includedCategory.excludePatterns])
    }
  }
}