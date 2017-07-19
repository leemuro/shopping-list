export default function patternScore(pattern, candidate) {
  if(candidate == null)
    return 0;

  // Turn the pattern syntax into a regex: ex: "* apple" -> "(.*) apple"
  let patternWords = pattern.split(" ");
  let regexString = patternWords.reduce((result, word) => {
    if(word == "*")
      return result == "" ? "(.*)" : result + " (.*)"
    else
      return result == "" ? word : result + " " + word;
  }, "")

  let regex = new RegExp(regexString.toLowerCase() + '(\\W+|$)')

  if(candidate.toLowerCase().match(regex))
    return patternWords.length;

  return 0;
}
