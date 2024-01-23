// In javascript there are value and primitive types

//Value types: Number,String,Boolean,Symbol,undefined,null (pass by value types in java)
// primitives are copied by value

let prim = 10;

function increase(number){
    number++;
}

increase(prim);
console.log(prim)

//Reference Types: Object,Function,Array (pass by reference types in java)
//objects or reference types copied by reference

let obj = {value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj)