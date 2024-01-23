//In Javascript functions are objects

function Circle(radius){

   
    this.radius = radius;
    this.draw = function(){
       console.log("draw");
    }
}

//by using call property
Circle.call({},1);

//by using apply method in the apply method we can pass all the arguments in an array
Circle.apply({},[1,2,3]);

const another = new Circle(1);


// difining functions with the help of constructor

const Circle1 = new Function(`radius`,`
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`)


const circle = new Circle1(1);