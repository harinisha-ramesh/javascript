let amount=1000
console.log("Your bill amount is Rs. "+amount)
console.log("Hello World")
document.getElementById("head").innerHTML="Welcome to our website"
/* for using prompt
let name = prompt("Your Good name please")
console.log("Hi ",name)
*/
/* for changing the type
let a=prompt("Enter a number")
console.log(Number(a)+5)
*/

/*
 for partitioning String 
stringName.slice(start,end)
stringName.substring(string,end)
stringName.substr(start,length)
*/

/* for adding two strings we can use 

str1.concat(str2) */

/* 
for removing extra space --> str.trim()
for removing extra space in start --> str.trimStart()
for removing extra space in end --> str.trimEnd()
*/

/*
for finding the length 
str.length */

/*
str.padEnd(7,'0')
-->here 0 denotes that it should be added at the end
--> 7 denotes that 0 has to be filled until the length to become 7
*/

/*
 to get the character we can use
 -->str[2]
 -->str.charAt[1]
 -->str.charCodeAt(2)
     it will display the number of the character and that number is called unique code
 to get the index number
 -->str.indexOf('a')
 to search a word in a string
 -->str1.search('word') 
 to know whether it is available or not it will display only true or false
 -->str.includes("word")  
 to know the starting letter it will display true or false
 -->str.startsWith("a") 
 also it has endswith
 -->str.endsWith("z")
 */

/* 
to get a random letter in name*/
const name="elisa"
const randomLetter=name[Math.floor(Math.random()*name.length)]
console.log("The random letter is " + randomLetter)

let firstName="Ramya"
let lastName="Murali"
let city="Chennai"
console.log(firstName+" "+lastName+" lives in "+city)

//Template literals
let final = `${firstName} ${lastName} lives in ${city}`
console.log(final)

let itemCount= 5
let total= "$95"

msg= `"You have ${itemCount} items in your cart.
Your bill amount is ${total}"`
document.getElementById("new").innerHTML=msg
