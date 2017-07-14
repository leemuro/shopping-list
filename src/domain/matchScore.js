export default function matchScore(match, candidate) {
  if(candidate == null)
    return 0;

  // Turn the matcher syntax into a regex: ex: "* apple" -> "(.*) apple"
  let matchWords = match.split(" ");
  let regexString = matchWords.reduce((result, word) => {
    if(word == "*")
      return result == "" ? "(.*)" : result + " (.*)"
    else
      return result == "" ? word : result + " " + word;
  }, "")

  let regex = new RegExp(regexString.toLowerCase() + '(\\W+|$)')

  if(candidate.toLowerCase().match(regex))
    return matchWords.length;

  return 0;
}
