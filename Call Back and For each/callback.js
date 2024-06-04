//Call Back--> it is a function that is passed to another function as an argument and is executed after the other function had finished executing
// In simple words --> while calling a function sending another function as an argument
function heading1(name){
    console.log('hello ',name)
}
function heading2(name){
    const heading=document.querySelector('h1').innerHTML = "Hello " + name
}
function call(callingFun){
    callingFun('Raju')
}
call(heading1)
call(heading2)

//Foreach

array = ['jai','vivek','ram','ramya']
array.forEach(arr)
    
function arr(val){
    console.log(val.toUpperCase())
}
//using arrow function 
array.forEach(val => console.log(val))

console.log(array)
//for changing the words in the array to capital
array.forEach((val,index,array) =>{
    array[index] = val.toUpperCase()
})
console.log(array)

//To get the values in dropdown
let ar=['ECE','CSE','IT','EEE']
ar.forEach(val =>{
    const opt= document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById("select").appendChild(opt)
})

