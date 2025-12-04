function Outer(){
    let counter = 10 ;
    console.log(`outer functions runs with value of counter os ${counter}`);
   return  function inner(){
         counter++;
         return counter;
    };

}

const count = Outer();  //outer function finised its executions
console.log(count()) ;   // inner function still remembers the value of counter after outer function finished its ececutions
// count();//