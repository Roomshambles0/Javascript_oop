

// how javascript execution context works for functions and variables is different


//this function will execute 
one(1);
function one(a){
    return a++;
}


// this expression will not execute
two(2); 
let two = function(a){  // declaration of function like this is called expression in javascript 
    return a + 2;
} 