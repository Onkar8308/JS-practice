
function debounce (fn,delay){
    let timer ;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
           fn.apply(this,args,delay); 
        }, )    ;
    }

}

const handleInput = debounce(()=>{
    console.log(`API call is done`)
},300);