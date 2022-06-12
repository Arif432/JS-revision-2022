
// class Animal {
//     names 

//      sleep(){
//         console.log(` ${ this.names} is sleeping` );
//     }
// }

// class Cat extends Animal {
//     // names = "cat"

//     run(){
//         console.log(`${this.names} is runnung` );
//     }
// }

// class Hawk extends Animal {
//     // names = "hwak"

//     fly(){
//         console.log(`${this.names} is flying` );
//     }
// }

// let cat = new Cat
// let hawk = new Hawk
// cat.names = "cat"
// hawk.names="hawk"
// cat.sleep()
// cat.run()
// hawk.sleep()
// hawk.fly()



// Super constructor 

class Animal {
    constructor(names){
        this.names = names
    }

     sleep(){
        console.log(` ${ this.names} is sleeping` );
    }
}

class Cat extends Animal {
    // names = "cat"
    
    constructor (names , capacity){
        super(names)
        // this.names = names => error in inherit
        this.capacity= capacity
    }

    run(){
        console.log(`${this.names} is runnung` );
    }
}

class Hawk extends Animal {
    // names = "hwak"
     constructor (names , capacity){
    super(names)
    // this.names = names => error
    this.capacity= capacity
    }

    fly(){
        console.log(`${this.names} is flying` );
    }
}

let cat = new Cat("cat")
let hawk = new Hawk("hawaks")

cat.run()
hawk.fly()


