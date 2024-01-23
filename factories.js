

// if you want to duplicate the object but the object has one or more methods(behavior) then the object literal syntax is not the right choice of syntax
// because if there is an error in one method you have resolve  the error at multiple places 

// solution is use factory and constructor function

// factory function 
// if any function returns an object in javascript it is called as factory function

function drawcircle(radius,x,y){
    return {
        radius,
        location:
        {
            x,
            y
        },
        draw: function(){
            console.log("draw")
        }
    }
}


// Constructor Function
// if any function uses this operator then it is called as constructor function
// if you are using constructor function then the make first alphabate of the function name capital
function Circle(radius){
 console.log("this",this)

 this.radius = radius;
 this.draw = function(){
    console.log("draw");
 }
}
const another = new Circle(1);

// javascript new keyword 
// On calling the constructor function with the ‘new’ operator, the following actions are taken:

// proto property: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
// If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.

// A new empty object is created.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.
// About the returned value, there are three situations below. 

// Return Value
// If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.
// If the constructor function returns nothing, ‘this’ is returned;
// If the constructor function returns a primitive value,  it will be ignored, and ‘this’ is returned.

// constructor functions
// In javascript there are inbuilt constructor functions
//  if we 

let x = {}

// javascript will interprit above as 
// let x = new Object()
// {} this symbol is called literal 


// every primitive datatype have constructor function and literals 
// for eg. string literal is '' "" and 'String()` constructor function
// when you call any constructor function use new key word before it