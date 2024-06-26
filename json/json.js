//JSON --> Javascript object notation
// Lightweight format for storing and transporting data
// Often used when data is sent from a server to a web page 

// We can store json in string,number,boolean,array,object and also array of objects.
/*  Difference between js object and json object is */
 let js = {
    name: "jai", //In js only for pair quotation mark is present not for key
    age:20
 }
  

let json = {
    "place" : "chennai", //In json for both key and pair should be given in quotation 
    "number" : 350

} 
//array of objects
let json1 = `[
    {
        "name" : "tina",
        "age" : 15
    },
    {
        "name" : "gita",
        "age" : 17
    },
    {
        "name" : "sita",
        "age" : 19
    }
]`
let parsing = JSON.parse(json1) // a process in which a string of data is converted from one format to another
console.log(parsing)
console.log(parsing[1]) //for getting the specific value

console.log(JSON.stringify(parsing)) //to convert the object as string