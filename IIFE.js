//(function sayHello(){
//    console.log(`Hello  user`); // the invoke function it call imideatly of an function 
// })();      // For removing the global scopes in the function we use invoke function


(function hey() {
    // unnamed IIFE
    console.log("hey..")
})();

((name) => {
    console.log(`Hello ${name}`);
    
})("Rahul")
// Named IIFE function