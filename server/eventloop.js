//https://codedamn.com/news/nodejs/event-loop-role 
//https://nodejs.org/en/guides/event-loop-timers-and-nexttick  **advanced learn after 
//https://youtu.be/8aGhZQkoFbQ?feature=shared


// loupe(visulaize javascript event loop): http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

//thread blocking: javascript is single threaded language so
// wheneverver there is an expensive operation such as network requests that blocks the code and make overall execution slow


//settimeout is the example of eventloop

//javascript runs one thing at a time but in the 
//case of webapi it just uses another thread


/*
--event loop: 
it has only one job to look at the call stack and when the call stack is empty push the first thing on the 
callback queue to the call stack


--rendering in javascript:
 -browser rendering is '60fps' (repaints) basically it wants to render the every 16.6 miliseconds
 -but it only renders when the call stack is empty
*/