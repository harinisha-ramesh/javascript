//Set- only unique values can be stored no repeated values
let arr = [2,2,4,5,6,4,8,9]
let set1 = new Set(arr)
console.log(arr)
console.log(set1)

// we can also add string ,objects 
let set2 = new Set()
set2.add(3)
set2.add(5)
set2.add('pqr')
set2.add({'a':1,'b':2})
console.log(set2)
//now we are adding the same object in this set
set2.add({'a':1,'b':2})
console.log(set2)
//As said before set won't take duplicate values but object was taken 2 times
// Object was reference type soo the memory address was different so it is taken as diferent values
//This duplicate values are considered only for primitve data types not reference

/* we can also see the size of the set */
console.log(set2.size)
console.log(set2.has(2))

//Map
/* Map is the collection of key-value pairs 
 key in the map should occur only once but value can occur more than once */
let map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('c',3)
console.log(map1) 
console.log(map1.has('b'))

// Like size and has we can see many elements in both set and map

//For iteration
for(let i of map1){
    console.log(i)
}
//way to iterate separately either key or value
for(let [x,y] of map1){
    console.log(x)
    console.log(y)
}
//Another way
for(let z of map1.keys()){
    console.log(z)
}
//Using forEach function
map1.forEach((x,y) => {
    console.log('key',x,'value',y)
})