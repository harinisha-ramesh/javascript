//Map - executes callback for each array 
// the values in the array can be changed to new value
// element and returns new array 

let price = [12,45,78]
let priceDouble = price.map(x  => x* 2)
console.log(priceDouble)

// map using array of objects
let obj = [{name:'Ram',age:12},
    {name:'John',age:18},
    {name:'Vivek',age:21},
    {name:'Raju',age:20},
    {name:'Anu',age:24}
]
let map = obj.map(x => x.age)
console.log(map)

//Filter- returns new array by checking each value of original array using call back function
// it won't send all the values to the new array it will filter and send using the condition given in the callback functio
let num = [23,25,5,89,45,183,654]
let cal= num.filter(x => x<50)
console.log(cal)
 
// reduce -  reduce an array of values into a single value
num = [23,25,5,89,45,183,654]
let red = num.reduce((total,el) => total*el)
console.log(red)

//flat- will reduce the many dimensional array to the one dimensional array
arr = [
    ['a','b','c'],
    ['b','c','d'],
    ['e','f','g']
]
let final = arr.flat().reduce( 
    (accumulator,curVal) => {
        if(accumulator[curVal])
            accumulator[curVal]++
        else
            accumulator[curVal] = 1
        return accumulator
    },{}
)
console.log(final)
/* Explanation - here flat() will make it as one dimensional array and then there are 2 parameters 
--> First give the empty object at the last
--> Then the curVal will denote the individual elements in the array
--> if the curVal is present in the accumulator then it will add 1 to the present number
--> If it is not present then it will go to the else statement 
--> here if the there is no value in the accumulator it will update as 1 */