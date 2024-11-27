//questions
/*
 Q: Write code that
 1. logs hi after 1 second
 2. logs hello 3 seconds after step 1
 3. logs hello there 5 seconds after step 2
 
*/



//by callbacks

setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
    console.log("hello there");
       }, 
   5000);
     }, 3000);
    }, 1000);

//alternative solution using callbacks

function step3Done() {
    console.log("hello there");
   }
   function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
   }
   function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
   }
   setTimeout(step1Done, 1000);


   //promisified version

   function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
   }
   setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
   });

   //alternative promisified solution

   setTimeoutPromisified(1000)
   .then(function () {
  console.log("hi");
  return setTimeoutPromisified(3000);
   })
   .then(function () {
  console.log("hello");
  return setTimeoutPromisified(5000);
   })
   .then(function () {
  console.log("hello there");
   })