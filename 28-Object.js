// Map comes with properties thats why use NEW
// Number has no props  
// let x = new Map()

// console.log(x);

// x = new Number("3")
// y = Number("4")
// console.log(x);
// console.log(y);

//Objects contains props and methods 

// this ( refers to window object when global)

let car = {
    //propetries
    model : "ferrari",
    year : "2022",
    color : "blue",

    //inside an object use 'this' to use properties
    drive : function (){
        console.log(`you r drivn ${car.model}`); // this == object name
    },

    brake : function(){
        console.log("you applied brakes");
        console.log(`you r drivn ${this.model}`);
    }
}

let car2  ={
    model : "mustang",
    year : "2000",
    color : "red",

    // car.drive() (wrong)

    drive : function (){
        console.log("you r drivn");
    },

    brake : function(){
        console.log("you applied brakes");
    },

    notMoving : ()=>{
        // arrow func havae no context so no use of (this)
        console.log( car2.model ); // this == object name
        // arrow function accept name instead of this keyword
        console.log(this.color);
    }
}

car.drive()
car.brake();
car2.notMoving() ;
console.log(this);