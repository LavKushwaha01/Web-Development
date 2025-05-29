function delayedcall(fn: ()=> void){
    setTimeout(fn, 1000);
}

function log(){
    console.log("hii there");
}
delayedcall(log);


