/*Exception handling - used for handling abnormal statements i.e. the runtime error which occurred during the 
                       execution of a program  */


try{
    num = prompt("Enter a number")
    if(isNaN(num))
        throw "Enter the valid number"
    if(num === '')
        throw "Cannot be empty"
    console.log(num**2)
}
catch(error){
    console.log(error)
}
finally{
    console.log(`'Thank you'`)
}