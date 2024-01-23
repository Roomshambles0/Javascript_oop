function Circle(radius){

   
    this.radius = radius;
    this.draw = function(){
       console.log("draw");
    }
}

const circle = new Circle(10);

// we can add and remove properties whenever we need them
circle.location = {x:1,y:1};

// to calculate property name dynamically(if you have spacial characters and names)
const propertyname = 'location';
circle[propertyname] = {x:1,y:2}; 

//for deleting properties
delete circle.location

delete circle['location']


// iterating with properties

for(let key in circle) {
    console.log(key)
}

//Object.keys method return keys as arrays
const keys = Object.keys(circle);
console.log(keys)

//"in" operator in objects is used to cheack any key is in the object or not
if('radius' in circle){
    console.log("circle has a radius");
}