// class Players {
//     centuries  
//     shirtColor

//     break(){
//         console.log("taking break");
//     }

//     resume(){
//         console.log("resume game");
//     }
// }

// // console.log( Players.shirt )

// let player0 = new Players()
// player0.break()
// console.log( player0.centuries )

// let player1 =  {
//     nameP : "arif",
//     numb : 10,
//     score :100 ,

//     player0 ,
//     Players ,

//     six : ()=>{
//         console.log( `${ player1.nameP } hit six`);
//     },

//     run: ()=>{
//         console.log( `${ player1.nameP } running`);
//     },

//     four : ()=>{
//         console.log( `${ player1.nameP } hit 4`);
//     }
// }

// // console.log("object player 1" + player1.player0.resume() );
// // console.log("object player 1" + player1.Players );

// let player2 = {
//     nameP : "arif",
//     numb : 10,
//     score :100 ,

//     six : ()=>{
//         console.log( `${ player2.nameP } hit six`);
//     },

//     run: ()=>{
//         console.log( `${ player2.nameP } running`);
//     },

//     four : ()=>{
//         console.log( `${ player2.nameP } hit 4`);
//     }
// }
// player1.six();


class PlayersInfo {
    names
    centuries
    shirtColor

    six(n){
        console.log( `${this.names = n } hit six ` );
    }

    four(){
        console.log( `${this.names } hit four ` );
    }
}

let player1 = new PlayersInfo();

player1.six( "arif" )

let player2 = new PlayersInfo()

// player2.PlayersInfo += {
//     out(){
//         console.log(` ${ this.names } catch out`);
//     }
// }

// console.log( player2.out() );
// player2.names = "hamza"
// let x = player2.names
// player2.six( x )

// player2.out()
player2.six("afridi")


let player0 = new PlayersInfo() 

// adding new "out" property/method inside player0 already contains class props
//player.out method inside player0 object
player0.out = ()=>{
    console.log(`${ player0.names } out`);
   
}
player0.names = "asad ali"

player0.out( this.names )


// // player0 {
//     names ,

//     out :()=>{
//         console.log(names);
//     }
// }


// player0.out()


// player0.PlayersInfo.names = "asda"  (wrong way)


