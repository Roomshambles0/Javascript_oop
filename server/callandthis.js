//"this" tells current execution context in node js or serverside javascript
//and in browser it points to window object  
// in node it points to empty object


function SetUsername(username){
    this.username = username;

}

function createUser(username,email,password){
    SetUsername.call(this,username);

    this.email = email
    this.password = password
}



const chai = new createUser("chai","chai@fb.com",123);
console.log(chai)


//whenever you are calling function inside function just like above you cannot access "this.username directly" 
//because this points to the current execution context but in the call stack when the SetUsername in executed its execution context is removed hence "this.username" is removed too.
//when we have to call SetUsername function inside any function we have to use .call() method and pass "this" of the createUser function so that all properties that start with "this." will point to the createUser function.



/*
It seems like your question is incomplete or there might be a typo. However, based on what you've provided, it looks like you're asking about the meaning of the keyword "this" in JavaScript.

In JavaScript, the keyword "this" refers to the current execution context. The value of "this" depends on how a function is called. Here are some common scenarios:

1. **Global context:**
   When "this" is used outside of any function or object, it refers to the global object, which is usually the window object in a browser environment.

   ```javascript
   console.log(this); // refers to the global object (window in a browser)
   ```

2. **Function context:**
   Inside a function, "this" can vary based on how the function is called.

   ```javascript
   function myFunction() {
     console.log(this);
   }

   myFunction(); // refers to the global object (window in a browser)

   const myObject = {
     myMethod: function() {
       console.log(this);
     }
   };

   myObject.myMethod(); // refers to the object (myObject in this case)
   ```

3. **Event handlers:**
   In event handlers, "this" often refers to the element that triggered the event.

   ```javascript
   document.getElementById('myButton').addEventListener('click', function() {
     console.log(this); // refers to the button element
   });
   ```

4. **Constructor functions:**
   When a function is used as a constructor with the `new` keyword, "this" refers to the newly created instance of the object.

   ```javascript
   function MyClass() {
     console.log(this);
   }

   const myInstance = new MyClass(); // refers to the instance of MyClass
   ```

It's important to note that arrow functions behave differently regarding "this" compared to regular functions. In arrow functions, "this" retains the value of the enclosing lexical context, and it is not influenced by how the function is called.
*/