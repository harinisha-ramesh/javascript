//Synchronous
/* -->Generally Javascript was Synchronous only in its basic form
 -->Synchronous means if there are soo many steps it wwill be executed step by step only */

 //Asynchronous 
 /* the steps will be executed at a time 
    this asynchronous can be executed using the browser */

 //setTimeOut
 setTimeout(() => console.log('hello1'),1000)
 setTimeout(() => console.log('hello2'),2000)
 setTimeout(() => console.log('hello3'),3000)
 // here 1000,2000,3000 indicates millisecond
 // setTimeOut means after how many seconds does the output should display in the browser

//setInterval
setInterval(() => console.log('hello'),2000) 
// here for every 2 seconds the hello will execute continously 