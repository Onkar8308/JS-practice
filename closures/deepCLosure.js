function outer1(){
    var key1= 10;
    return function outer (){
        var key2 = 20 ;
        return function inner(){
            console.log(key1,key2);
        }
    }
}

const res = outer1();
const innerValue =  res();
innerValue();