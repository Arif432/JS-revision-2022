// _protected to be 

// class Student {

//     constructor (age){
//         this._age = age
//     }

//     get getAging() {
//         return this._age
//     }

//     //get set can simply be .log they dont need () to be call
//     set setAge(newAge){
//         this._age = newAge
//     }
// }

// std1 = new Student(20)
// // console.log( std1._age); ez access


// console.log(std1.getAging);
// std1.setAge = 33
// console.log(std1.getAging);



// pass objects to func as args

class Student{
    constructor( name , age , gpa ){
        this.age = age
        this.gpa = gpa
        this.name = name
    }

    walk(){
        console.log( `${this.name} is walking`);
    }
}

std1 = new Student( "arif" ,20 , 3 )
std2 = new Student( "must" ,22 , 4 )
std3 = new Student( "babb" ,23 , 5 )

allStds = [ std1 , std2 , std3 ]
allStds.forEach( (element , index )=>{
   element.walk();
} )


