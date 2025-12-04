JavaScript



JavaScript is synchronous and single threaded language

whenever JS run the global execution context is crated



JS is synchronous why:



Js is synchronous means the JS each line of code have to wait until the previous line of code to complete its execution

JS async operation can be achieved using promises, callback \& async await()





How JS works :



JavaScript runs in two phase

1: memory creations phase

2: code execution phase



## hosting in JS :



hosting in means moving the variables and function declaration are moved to the top of the code execution

Only declarations are hosted not defination



var : var is hosted on the top of the scope

 	value: "undefined"



let/const : let \& const are hosted to but placed in TDZ

 		if you try to access before definition it will throw the reference  error

