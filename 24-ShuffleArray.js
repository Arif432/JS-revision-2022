let cards = ["A" ,1,2,3,4,5,6,7,8,9,10,'J','Q','K']



const shuffle = function(arrayOfCards){
    
    let len = arrayOfCards.length 
    let currentInd = len
    
    while (currentInd != 0 ) {
        let random = Math.floor( Math.random()*len )
        currentInd -= 1

        let temp = arrayOfCards[currentInd]
        arrayOfCards[currentInd] = arrayOfCards[random]
        
        arrayOfCards[random] = temp

    }

    return arrayOfCards
}

shuffle(cards)
cards.forEach( (element ) => console.log(element))