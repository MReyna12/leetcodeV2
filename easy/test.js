const sortPeople = function (names, heights) {
  const people = {};
  let order = [];

  // The object keys will be sorted in ascending order
  for (let i = 0; i < names.length; i++) {
    people[heights[i]] = names[i];
  }

  // Grab only the names of each person
  const temp = Object.values(people);

  // Add the names of the temp array, starting from the end (because the object keys/value pairs were added in ascending order)
  for (let j = temp.length - 1; j >= 0; j--) {
    order.push(temp[j]);
  }

  return order;
};

sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
