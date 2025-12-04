const arr1 = [
  [1, 2],
  [3, [4]],
];

function flattenArray(arr) {
  let res = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flattenArray(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

console.log(flattenArray(arr1));
