/* Function - performs specific task 
            - can be called many times */

//Function Declaration            
function isPositive(num) /* Parameter*/{
    return num > 0
}        
console.log(isPositive(-3))   //argument

//without argument and parameter
function helloAll(){
    console.log('hello')
}
helloAll()

//with 2 parameter
function twoNum(x,y){
    return x+y
}
console.log(twoNum(3,5))
console.log(twoNum) 

//default parameters 
function newName(name = 'user') {
    console.log("hello",name)
}
newName('Ravi')
newName() 

//Recursion-function calling itself 
// for finding factorial we can use Recursion-product of first n numbers
//5! = 5*4*3*2*1 =5*4!
function  factorial(n) {
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(6))

//function expression
//assigned to a variable as a object

let evenNum = function(even) {
    return even%2 == 0
}
console.log(evenNum(200007))

arr = [2,5,7,8,1,6,3]
let func = function(arr){
    let sum=0
    for (let val of arr){
        sum+= val
    }
    return sum
}
console.log(func(arr)) 

//arrow function
//to find the volume 
//if the parameter is more than one then give open and closed bracket or else no need
let arrow = (l,b,h) => {return l*b*h} // inside function if there is only one line and that too is return means no need of return and curly brackets
console.log(arrow(3,6,7))

let sum= arr => {
    let sum=0
    for (let val of arr){
        sum+= val
    }
    return sum
}
console.log(sum(arr))
//area of circle
let circle= ra => Math.PI*ra*ra
console.log(circle(4)) 

// console.clear() --> used to clear the console

//variable arguments - rest parameters
let argu = function(...arr){ // using spread operator
    let result = 1
    for(let val of arr)
        result *= val
    return result
}
console.log(argu(4,5,6,9))
//another method 
let arg2 = function(){
    let result=1
    for(i=0;i<arr;i++)
        result *= arr
    return result
}
console.log(arg2(4,5,6,9))


//Generators--> generates value one by one
//function* -->for generaotrs use function*
function* indexGenerator(){
    let index = 2
    while(true){
        yield index++ //instead of return we are giving yield
    }
}
const gene= indexGenerator()
console.log(gene.next().value)
console.log(gene.next().value)
console.log(gene.next().value)
console.log(gene.next().value)
console.log(gene.next().value)
