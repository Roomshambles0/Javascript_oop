const user = {
username:"piyush",
price:777,

welcomeMessage: function(){


//context: meanse sandrabh in marathi "reference"

//this points to the current context inside object this will point to the current object
    console.log(`${this.username},welcome to website`)

// we are not able to use "this" inside functions it just logs undefined in normal
}
}


const users = ()=>{
 let username = "piyush";
    console.log("all users")
    console.log(this.username);
}

console.log(users(),"24")


// implicit return arrow function 
// whenever you are running one line statement arrow function you don't need to use "return" keyword

const user2 = (num1,num2) => (num1 + num2) 
