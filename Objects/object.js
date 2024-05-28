// for object use curly bracket{}
// objects contain properties and methods
let phone= {
    name:'Samsung',
    price:30000,
    quantity:3,
    dimensions:{  //we can give objects inside another object
        length:8,
        breadth:3.5,
        height:15
    },
    brand:['M21','M11'] //we can also give arrays inside the object

}
//for accessing the array
console.log(phone.brand[0])
//for accessing the object inside another object
console.log(phone.dimensions.height)
console.log(phone)
//another way of creating the object
let laptop=new Object()
laptop.name = "hp"
laptop.price = 56000
laptop.quantity = 1

//accessing the object
//dot notation
console.log(laptop.price)
console.log(phone.price)

//for changing the value in property of an object
phone.quantity=2
console.log(phone.quantity)

//for adding the property in a object
phone.color="blue"
console.log(phone)

//square bracket notation 
console.log(laptop['price'])
laptop['color']="white"
console.log(laptop)
laptop['quantity']=5
console.log(laptop)

//adding methods
 phone= {
    name:'Samsung',
    price:30000,
    quantity:3,
    buy: function(){
        console.log("Offer is going")
    },
    //instead of giving function we can give directly also
    addTolist(){
        console.log("Add to the cart")
    }

}
phone.buy() /*buy was a method soo inside it we can write code also
             and while retriving use paranthesis as we have given it as function */
            

