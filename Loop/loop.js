// for loop
let i
for( i=1;i<=6;i++){
    console.log(i)
} 
 console.log('outside loop ',i)

/*--> first i denotes the initial number it starts
 --> second i denotes how many time it should repeat
 --> final one was adding each number until it reach 6 */


 //print from 10 to 1
console.log('for loop')
for (j=10;j>=1;j--){
    console.log(j)
}


//while loop
console.log(`while loop`)
i=10
while(i>=1){
    console.log(i)
    i--;
}


//do while loop
console.log("do while loop")
i=10
do{
    console.log(i)
    i--;
}while(i>=1)


//break-stops the loop
while(true) {
    let input=prompt("Enter a number")
    let num=Number(input)
    if (!isNaN(num)) {
        break;
    }
}


//continue-skips the current iteration
console.log("conitnue")
for (i=1;i<=20;i++){
    if(i%2==0)
        continue
    console.log(i)
}


//array in loop
let arr=['apple','orange','grapes','mango']

for(i=0;i<arr.length;i++)
    console.log(arr[i].toUpperCase())


//for...of--> it is used to loop in arrays
for(let fruit of arr)
    console.log(fruit)
/* in the place of fruit the array values will be displayed*/


//for...in -->it is used to loop in objects
item={
    name:"phone",
    quantity:2,
    price:25000
}
// to get the key
for(let key in item)
    console.log(key)
/* in the place of fruit the array values will be displayed*/
//to get the value
for(let key in item)
    console.log(item[key])