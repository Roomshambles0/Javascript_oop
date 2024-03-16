//Promises in javascript
//A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


//Promises has three states
//pending
//accepted
//rejected


//syntax written below is in es6
//creation
const promise1 = new Promise(function(resolve,reject){
   
setTimeout(()=>{
    console.log("async task is completed")
    resolve()
},1000)

})

//there are two parts promise creation and consumption

//consumption
promise1.then(function(){
    console.log("resolved")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task is completed2")
        const user = {"username":"Piyush"}
        resolve(user)
    },1000) 
}).then(function(user){
    console.log("resolved2",user)
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task is completed3")
        const user = {"username":"Piyush"}
        const error =true
        if(!error){
        resolve(user)
        }else{
            reject("error")
        }
    },1000) 
})

promise3.then((user)=>{
    console.log(user)
}).catch((e)=>{
    console.log(e)
}).finally(()=>{
    console.log("finally")
})

//How to handle promise with async await

const promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task is completed4")
        const user = {"username":"Piyush"}
        const error = false
        if(!error){
        resolve(user)
        }else{
            reject("error")
        }
    },1000) 
})

async function Consumepromise4(){
    try {
   
    const res = await promise4
   console.log(res)

    } catch(error) {
     
    console.log(error)

    }
}

Consumepromise4()

//fetch example


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))