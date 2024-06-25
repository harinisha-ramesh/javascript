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
