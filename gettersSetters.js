//getter is function used to read property value (private property)
//setter is function used to set property value  (private property)


function Circle(radius){
  
    let defaultlocation = {x:0,y:0};


    this.radius = radius;
    this.draw = function(){
       console.log("draw");
    }


  //syntax for define properties    

  Object.defineProperty(this,"defaultlocation",{
    get: function() {
        return defaultlocation;
    },
    set: function(value){
        if(!value.x || !value.y)
        throw new Error('Inalid location');

        defaultlocation = value;


    }


     
    
  })
   }
   const another = new Circle(1);

   console.log(another.defaultlocation)
   another.defaultlocation = {x:1,y:2}
   console.log(another.defaultlocation)