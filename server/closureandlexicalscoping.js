//https://youtu.be/VaH09NXQZ58?feature=shared
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//closure: In other words, a closure gives you access to an outer function's scope from an inner function. 
//In JavaScript, closures are created every time a function is created, at function creation time.
// you need to call the function inside the outer function body for eg.

//lexical:where the variable is declared(location of variable) to determine where variable is available

function outer(){
const name = "piyush";
function inner(){
    console.log(`hello ${name}`);
}
inner();
}

outer();

//closure:
//In the context of closure if you defined function inside a function and  you are returnning inner function reference. 
//then the entire lexical scope is also returned. 

// A closure is the combination of a function and the lexical environment within which that function was declared.

function makeFunc(){
    const name = "mozila";
    function displayname(){
        console.log(name)
    }
    return displayname;
}


const myfunc = makeFunc();

myfunc();
/*
In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

*/

