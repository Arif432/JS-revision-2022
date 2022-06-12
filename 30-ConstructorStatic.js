
// class Student{
//     constructor (gp,name ,age){
//         this.gp = gp 
//         this.name = name
//         this.age = age
//     }

//     study(){
//         console.log(`${this.name } is ${this.age } and ${this.gp } `);
//     }
// }

// let std1 = new Student(3.2,"anay",25)

// // std1.age =24
// // std1.name = "Arif"
// // std1.gp = 3.2

// std1.study()

// let std2 = new Student
// std2.age =34
// std2.name = "must"
// std2.gp = 3

// static key

class Cars {

    static totalCars = 0
    constructor (model){
        this.model = model
        Cars.totalCars +=1 //2 car initial by construct
    }

    showCar(){
        console.log( this.model );
    }

     static race(){
        console.log( "start race");
    } 
}

// constructor only for brackted parameter in Car("musr")
car1 = new Cars("Mustang")
car2 = new Cars("Limo")
// car2.showCar()
car3 = new Cars
car3.model = "ferrari"
// car3.showCar()

Cars.race()