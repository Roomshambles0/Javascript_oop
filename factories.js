

// if you want to duplicate the object but the object has one or more methods(behavior) then the object literal syntax is not the right choice of syntax
// because if there is an error in one method you have resolve  the error at multiple places 

// solution is use factory and constructor function

//factory function 
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
// : "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
// If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.
// If the constructor function returns nothing, ‘this’ is returned;
// If the constructor function returns a primitive value,  it will be ignored, and ‘this’ is returned.

