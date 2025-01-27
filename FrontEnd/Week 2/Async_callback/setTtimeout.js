

console.log("hii");  //1st 

function timeout(){
    console.log("this is timeout here");
}

setTimeout(timeout,5000);   //3rd
  
let x=0;
for(let i=0; i<11000000; i++){
    x++;               //2nd
}
console.log(x);

Console.log("done");   //4th
