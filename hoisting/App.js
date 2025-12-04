//defination
/* --- */


//examples
// v name = 'SEJ'
// function name1() {
//     console.log(this.name)
// }

// const obj1 = {
//     name : 'onkar',
//     age:12 ,
//     greet: ()=>{
//         console.log(this.name)
//     }
// }
// console.log(obj1.greet());

function getDetails(name, dept) {
    this.name = name,
    this.dept = dept='IT'
}

const newObj = new getDetails('onkar');
    
console.log(newObj.dept);