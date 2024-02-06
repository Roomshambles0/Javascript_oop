//https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/#:~:text=When%20the%20JavaScript%20engine%20scans,for%20the%20variables%20and%20functions

/*
Execution context: it is the environment created by javascript engine when it start reading the code 

two phases: creation phase and execution phase

Creation phase: It is the phase in which variables are created inside a memory

At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context, and then does the following things:

Creates a global object that is window in the browser and global in NodeJs.
Sets up a memory for storing variables and functions.
Stores the variables with values as undefined and function references


function returns its  return value in global execution context 



execution phase:

Now, in this phase, it starts going through the entire code line by line from top to bottom. As soon as it encounters n = 5, it assigns the value 5 to 'n' in memory. Until now, the value of 'n' was undefined by default.

Then we get to the 'square' function. As the function has been allocated in memory, it directly jumps into the line var square1 = square(n);. square() will be invoked and JavaScript once again will create a new function execution context.
*/