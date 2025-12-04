// const arr = [10,2,4,5,3]

// const max = arr.reduce((acc,cur)=>{
//     if (acc>5 && acc<10){
//         return acc;
//     };
// },2)

// console.log(max);

const arr = [1, 2, [1], [1, 2], [[1, 2], 1]];

function flattenArray(arr) {
  let resArray = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      resArray = resArray.concat(flattenArray(item));
    } else {
      resArray.push(item);
    }
  });
  return resArray;
}

console.log(flattenArray(arr));
