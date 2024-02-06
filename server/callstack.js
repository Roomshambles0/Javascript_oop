// Link:https://youtu.be/ByhtOgF6uYM?feature=shared
//https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/#:~:text=When%20the%20JavaScript%20engine%20scans,for%20the%20variables%20and%20functions




//Javascript Execution context: how javascript executes your code file

/*

-first it will make global execution context and point "this to it"
-every environment have different global execution context browser has `window` objex
-because it is single threaded

-another one is function execution context, eval is another object in mongoose 






To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

Let's see the following example:

function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);

console.log(res); // 30
In this example, the JS engine creates a global execution context that enters the creation phase.

First it allocates memory for funcA, funcB, the getResult function, and the res variable. Then it invokes getResult(), which will be pushed on the call stack.

Then getResult() will call funcB(). At this point, funcB's context will be stored on the top of the stack. Then it will start executing and call another function funcA(). Similarly, funcA's context will be pushed.  

Once execution of each function is done, it will be removed from the call stack. The following picture depicts the entire process of the execution:

5
Call Stack
The call stack has its own fixed size depending on the system or browser. If the number of contexts exceeds the limit, then a stack overflow error will occur. This happens with a recursive function that has no base condition.

function display() {
    display();
}

display();
C:\Users\rwiteshbera\Desktop\Javascript\n.js:2
    display();
    ^
RangeError: Maximum call stack size exceeded

*/