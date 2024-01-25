//inheritance, abstract function, static keyword 
class User{
    constructor(name,password,email){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    changePassword(newpass){
       this.password = newpass;
       return this.password;
     }

}

const user = new User("piyush","123/","email@piyush");
console.log(user.password)
user.changePassword("234/");
console.log(user.password)


class Circle1{
// static properties are not accessed on the instances 
// also static restricts access to its children classes and its instances

    static nearPoint = {x:1,y:1};
  
    constructor(radius,location){
        this.radius = radius;
        this.location = location;
    }

    draw(){
        console.log("draw")
    }
   }

   const circle = new Circle1(10,11);

   circle.draw();

class User extends Circle1{
    // use #<propertyname> to firstly initialize private properties.
    // this members are internally only used by class outside class or inherited class or instance of the class cannot reinitialize the class.
    #name
    constructor(radius,name){
        super(radius);
        this.#name = name
    }
}

