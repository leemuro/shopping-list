export default function matchScore(match, candidate) {
  if(candidate == null)
    return 0;

  let regex = matchWords.reduce((result, word) => {
    if(word == "*")
      return result == "" ? "(.*)" : result + " (.*)"
    else
      return result == "" ? word : result + " " + word;
  }, "");

  if(candidate.toLowerCase().match(new RegExp(regex.toLowerCase())))
    return matchWords.length;
}
