//Promise --> promise is an object representing the eventual completion or failure of an asynchronous operation
//There are two types of promise they are    i)Resolve    ii)Reject
// Resolve --> if the promise is successful then it is resolve
// Reject --> if the promise is failure then it is reject
const promise = new Promise((resolve,reject) => {
    let promiseSuccess = false
    if (promiseSuccess){
        resolve()
    } else {
        reject()
    }
})
promise.then(success) // inside {then} the success code should be given
.catch(failure)     // inside {catch} the failure code should be given

function success(){
    console.log("Congratulations! You have successfully logged in")
}
function failure(){
    console.log("Sorry! Please try again")
}

//Example 
let reachA = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)  //no need to give curly brackets for this 
        setTimeout(resolve,3000,"Meena reached")
    
    else
        reject("Meena not reached")   
})

let reachB = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)  //no need to give curly brackets for this 
        setTimeout(resolve,3000,"Teena reached")
    
    else
        reject("Teena not reached")   
})

let reachC = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)  //no need to give curly brackets for this 
        setTimeout(resolve,3000,"Heena reached")
    
    else
        reject("Heena not reached")   
})

Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message)) //Promise.all() will wait until all promises get resolve and then only it will display
.catch((message)=>console.log(message)) // if any of the promise rejects it will reject all 

Promise.allSettled([reachA,reachB,reachC]) //Fulfills when all promises settle
.then((message)=>console.log(message)) //it will show the reult whether it is resolved or rejected
.catch((message)=>console.log(message))

Promise.any([reachA,reachB,reachC])      //fulfills when any of the promise fulfills
.then((message)=>console.log(message))   //rejects when all of the promises rejects
.catch((message)=>console.log(message))
