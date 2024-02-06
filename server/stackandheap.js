//https://codedamn.com/news/javascript/memory-management-complete-guide

/*

-JavaScript consists of two types of memory spaces, i.e., Stack and Heap, to store variables. The difference between them is what variables get stored in which type of storage. Let’s take a closer look at stacks and heaps.


--Stack memory:
JavaScript uses the stack data structure to store static or fixed-size data. 
This includes all numbers, strings, booleans, and other primitive data types. These data types have a fixed size known at compile time. 
Variables such as objects, arrays, etc., are not stored in the stack as their size varies during run time.




--Heap memory:
Since Stack can only store fixed-size or static data, where does JavaScript store dynamic data? The answer is Heap. The heap memory, unlike stack memory, doesn’t have a fixed-size limitation, i.e., the memory gets allocated dynamically.

JavaScript uses a heap for storing variables whose size is unknown at compile time or may vary at the run time, such as objects, arrays, functions, etc.

The JavaScript Engine dynamically allocates memory to the heap.
Initially, the heap size depends on available system memory, and it can be dynamically increased/decreased based on the need. 
You can check the current memory usage of your Node.js application using the process.memoryUsage() method.

JavaScript allocates memory for objects within the heap, but we must have a reference to that memory location to access the value. The reference to the memory location resides in the stack memory.





--Garbage collector 
A Garbage collector is a part of the JavaScript Engine whose job is to free up unused memory from the heap using a garbage collection process. 
It ensures proper memory management while the application is running. Therefore, the programmer doesn’t have to worry about manual memory management, the garbage collector does it.



**Imp**

--Mark and sweep
It’s one of the most common garbage collection algorithms out there. 
Basically, it marks the objects not reachable by the root object, i.e., the window object as trash or garbage. Later, the garbage collector removes these marked objects from the heap. 
Have a look at the example below.

In the above example, the employee object is reachable from the window object. 
Now, because the company and person objects are reachable through the employee object, they are ultimately reachable by the window object. But, the car object and other objects connected to it are not accessible through the window object. 
Therefore, the algorithm marks these objects and later free up the memory used by them.
One tradeoff though is the global variables declared using var. When declaring a variable with var, the JavaScript Engine attaches them to the window object. Now, since these variables are always reachable by window objects, there are never removed by the garbage collector.



differnce between let const var
*/


