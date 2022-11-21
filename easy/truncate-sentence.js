function truncateSentence(s, k) {
  let truncatedString = [];

  const arrayOfStrings = s.split(" ");

  for (let i = 0; i < k; i++) {
    truncatedString.push(arrayOfStrings[i]);
  }

  return truncatedString.join(" ");
}
