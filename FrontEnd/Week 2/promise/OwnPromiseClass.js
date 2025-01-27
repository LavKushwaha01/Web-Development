class promise2{
    constructor(fn){
        this.fn = fn;
        this.fn(()=> {
        this.resolve ()
    });
        // function afterDone(){
        //     this.resolve();
        // }
        // fn(afterDone)
    }
    then(callback){
         this.resolve = callback;
         //like  this.color = "red"
    }
}

function ReadTheFile(resolve){
  setTimeout(function() {
    console.log("callback based setTimeout completed");
    resolve();
  },3000);
}

function setTimeoutPromisified(){
    return new promise2(ReadTheFile)
}

let p= setTimeoutPromisified();

function callback(){
    console.log("callback is completed")
}

p.then(callback);