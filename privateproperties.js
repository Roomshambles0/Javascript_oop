// note : everything in your object should not be publically accessable

// Abstraction: hide the details show the essentials
function Circle(radius){
// to abstract we need to create local variables using let and  const this works
// because local variables are not accesible to the outside things
   
   let color = 'red';

    this.radius = radius;

    let defaultlocation = {x:0,y:0};

    let computeOptimumLocation = function(factor){
      //...
    }

    this.draw = function(){
// color and computeOptimumLocation are in the closure of draw

    let x =1;

     computeOptimumLocation(0.1)

       console.log("draw");
    }
   }

   const circle = new Circle(10);
   circle.draw()

   //closure in javascript: closure is combination of function bundeled togather(enclosed) with references to its surrounding state
   //in closure we can access variables decalred in the parent function
   // if we finish executing draw function computeoptimumlocation does not dies but x will die