
let cities=["Chennai","Salem","Trichy","Erode"]
let number=[45,23,25,3,2.5]
let name=["Sheela","Alice","Ram"]

//we can add sub array inside another array
let array=[1,"hello",4.8,[3,5]]
console.log(array[3][1])

//2d array 
let d2=[[1,2,3],[4,5,6],[7,8,9]]
console.log(d2[2][0])

//array methods
let method = ['a','b','c','d','e','f']

//push-add elements to the end and returns the new length
method.push('g','f')
console.log(method)

//pop- removes element from the end and returns the removed value
console.log(method.pop())
//if u want to return the new element
method.pop()
console.log(method)

//shift-removes the element from start of the array and returns removed value
console.log(method.shift())
console.log(method)

//unshift-adds the element from the start to the array
console.log(method.unshift('a'))
console.log(method)

//splice-to delete and replace the element in the array
console.log(method.splice(3,1)) // here 3 represents the index position and 1 represents how many number should get deleted
console.log(method)
//for replacing
method.splice(1,1,'v') // here 3rd paraameter represents the value what we are going to replace 
console.log(method)
//for replacing 2 elements
method.splice(3,2,'x','y')
console.log(method) 
//for inserting the element in array
method.splice(1,0,'b') // if the 2nd parameter is given as 0 then the value will not get deleted only adding will happen
console.log(method)

//slice-for getting the particular element using index number
//it will not consider the ending index number
console.log(method.slice(2,-1))

//reverse-to reverse the array[it is permanenet change]
console.log(method.reverse())
console.log(method.reverse())

//join- converts array to string
let str1 = method.join()
console.log(str1)

//split-converts string to array
let str2 = "h-v,p-i,j"
ar1 = str2.split("-") // inside the bracket we have to give on which basis the array should be formed
console.log(ar1) 

//concat and spread operator
let f1=['a','b','c']
let f2=['d','e','f']
let f12=f1.concat(f2)
console.log(f12)
//spread
let join=[...f1,...f2]
console.log(join) 

/* example
let arr=[5,8,10,7,9,11]
arr.splice(3,3,17,19,111)
console.log(arr)

arr.unshift(100)
console.log(arr)

arr.splice(7,0,200)
console.log(arr)

arr.push(1000)
console.log(arr)

arr.splice(5,0,0)
console.log(arr)
*/
const  d = new Date()
console.log(d)




