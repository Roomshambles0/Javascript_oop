//why did math.pi property does not change
console.log(Math.PI);

//Math.pi 

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
// result
/*
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
  */

// core javascript implimentation has all of this coded


// how to make your own object properties unchangable,

const chai ={
    name:"ginger chai",
    price:10,
    isAvailable:true
}

Object.defineProperty(chai,"name",{
    writable:false,
    enumrable:false, // enumration meanse iterable in loop this property will be passed bu loop
    configurable:false
})

const chaidescirptor = Object.getOwnPropertyDescriptor(chai,"name")
console.log(chaidescirptor);
