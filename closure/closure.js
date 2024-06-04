//Returning function - A function returning another function
// We can add a function inside another function
//lexical scoping-inner function can access the outer function
 function outer(){
    let outerVar = "bread"
    function inner(){
        let innerVar = "Jam"
        console.log(innerVar)
        console.log(outerVar)
    }
    inner()
 }
 outer() 

 function newOne(x){
    return function(y){
        return x+y
    }

 }
 let value = newOne(6)
 console.log(value(10))

 //another example 
let adding = newOne(100)
console.log(adding(30))
console.log(adding(40))
console.log(value(35))

//Closure - a function that has access to the variables in its parent scope,even after the parent function has returned 
// Closures are created when a function is defined inside another function