function Circle(radius){
    console.log("this",this)
   
    this.radius = radius;
    this.draw = function(){
       console.log("draw");
    }
   }
   const another = new Circle(1);
   
   //above syntax is of constructor function 
   //we can code above function in class syntax

   class Circle{
    constructor(radius,location){
        this.radius = radius;
        this.location = location;
    }

    draw(){
        console.log("draw")
    }
   }

   const circle = new Circle(10,11);

   circle.draw()


