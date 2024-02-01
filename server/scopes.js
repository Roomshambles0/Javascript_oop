
let c = 20;
//outside block scope there is global scope

if(true) {
 
    let a = 10;  //available throughout the file
    const b = 20;
     c = 30;
    
// the things that defined under {} are in the block scope 

}

console.log(c);
console.log(b);
console.log(a);

// "{}" this is scope