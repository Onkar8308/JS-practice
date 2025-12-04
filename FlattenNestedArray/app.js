const arr = [[1, 3], [[2], [3, 4]], 6];
console.log(arr);

function flattenArray(arr){
  var newArr = [];
  arr.forEach(item => {
    if(Array.isArray(item)){
      newArr = newArr.concat(flattenArray(item));
    }
    else{
      newArr.push(item);
    }
    
  });
  return newArr;
}

console.log(flattenArray(arr));
