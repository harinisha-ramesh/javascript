
/*async - always returns a promise
async function random(){
    return 'Hi'
}

console.log(random())  */

//Another example

let reachB = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)  //no need to give curly brackets for this 
        setTimeout(resolve,1000,"Teena reached")
    
    else
        reject("Teena not reached")   
})

async function sample(){
    console.log("Hello all")
    try{
        resolved = await reachB  //await keyword allows for pausing execution until promise is resolved
        console.log(resolved)
    } catch(error){
        console.log(error)
    }
    console.log('byeee')
}
sample()