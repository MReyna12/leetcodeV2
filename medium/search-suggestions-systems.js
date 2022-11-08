// If products.length is greater than 1, sort the elements in products lexicographically
// Starting with the first letter of the searchWord, if it is the same as the first letter of the first product, then put said product into an array and go to the next product. This continues until the new array contains three products or all products have
// been compared, whichever comes first.
// After the above is complete, compare first two letters of searchWord to the first two letters of each product (similar to the pattern above).
// This continues until all letters of searchWord are compared.

function suggestedProducts(products, searchWord) {
  products.sort();
  let answer = [];
  let left = 0;
  let right = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    let charcter = searchWord.charAt(i);
    let res = [];
    while (products[left]?.charAt(i) < charcter) left++;
    while (products[right]?.charAt(i) > charcter) right--;
    for (let j = 0; j < 3 && left + j <= right; j++) {
      res.push(products[left + j]);
    }
    answer.push(res);
  }
  return answer;
}

suggestedProducts(
  ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  "mouse"
);
