
// function add (a,b,c){
//     return a+b+c;
// }

// console.log(add(1,4,5));


//using currying function

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(1)(2)(3));