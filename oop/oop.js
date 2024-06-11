//Object
let user1 ={
    name: 'Ram',
    age: 23,
    login() {
        console.log("You are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}
let user2 ={
    name: 'Raju',
    age: 20,
    login() {
        console.log("You are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}
let user3 ={
    name: 'Rahul',
    age: 25,
    login() {
        console.log('Hi',this.name) // Here if you give only name it won't display instead if you give (this) it will 
        //display the name or else you can give the variable name 
        console.log("Your age is",user3.age)
        console.log("You are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}
user3.login()

//Class- It is a template of properties

//class name should be in capital
class User{
    //static variables-the variable belongs to the whole class
    static numberOfUsers = 0;
    constructor(name,age){
        //instance variables- declared within a class
        this.name = name;
        this.age = age;
        User.numberOfUsers++ ;
    }
    login() { // this non static methods can't be called out so object is used to invoke
        console.log('Hi',this.name)  
        console.log("You are logged in")
    }
    logout(){
        console.log("You are logged out")
    }
    //static methods
    static totalUsers(){
        console.log("Total number of users is",User.numberOfUsers++)
    }
}
let newOne = new User('vivek',21)
let newTwo = new User('Sony',19)

console.log("Number of users",User.numberOfUsers)
//example for calling non static method
newOne.login()
//example for static method
User.totalUsers()

//Inheritance

/*The inheritance is nothing also a class for example this user is common and we need some special data and also this
  common data means we use inheritance */
// First derived User class is known as - Base class,parent class,super class
//Second derived Paiduser class is known as - Derived class,child class,sub class
class Paiduser extends User{
    constructor(name,age){
        super(name,age) //to call the objects from the base class
        this.storage = 100;
    }
    message(){
        console.log("New course is available")
    }
    //overriding-Already a method is in base class and it is redefined in derived class
    login(){
        console.log("Thank you for joining")
        return this // this should be given for method chaining
    } 
}
let Paiduser1 = new Paiduser('charu',23)
Paiduser1.login()
//Method chaining- giving more than one method is know as method chaining
Paiduser1.login().message()