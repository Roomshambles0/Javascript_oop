// IN oops we group of related variables and function in unit we call them as object
// the best functions are those with no parameter 
// if the memeber of an object is function then we call it as method
// other members are called properties


const circle = 
{
    redius: 5,
    location:
    {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("draw")
    }
}
//in the above function draw is method
// location and radius are properties

//properties hold the some values 
//functions holds some logic 


//circle.draw()
// if we want to run the body of draw method then we have to use ".draw()" syntax  

// if object has one or more methods then we can say that object has behavior