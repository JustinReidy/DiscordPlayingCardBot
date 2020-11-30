const fs = require('fs')
const axios = require('axios')

module.exports = {
    name: "cards",
    description: "Deals cards to a user",
    usage: "<user> <number>",
    args: [
        {
            key: 'player',
            prompt: 'You need to @ a user to deal cards to',
            type: 'string'
        },
        {
            key: 'number',
            prompt: 'You need to state how many cards should be dealt to the user',
            type: 'string'
        }
    ]

    // execute(message, {player}){
    //     return message.reply({player})
    // }
    // execute(message, args){
    //     const suits = ["Clubs", "Spades", "Hearts", "Diamonds"]
    //     const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]

    //     const dealtCards = []

    //     // Create the Deck
    //     const deck = new Array()

    //     for(let i = 0; i < suits.length; i++){
    //         for(let j = 0; j < values.length; j++){
    //             var card = `${values[j]} ${suits[i]}`
    //             deck.push(card)
    //         }
    //     }

    //     // Shuffle the deck
    //     function shuffleAndDeal(deck){

    //         let shuffled = deck

    //         for(let i = 0; i < 1000; i++){
    //             let location1 = Math.floor((Math.random() * shuffled.length))
    //             let location2 = Math.floor((Math.random() * shuffled.length))
    //             let tmp = shuffled[location1]
    //             shuffled[location1] = shuffled[location2]
    //             shuffled[location2] = tmp

                
    //         }

    //         // deals the cards

    //         // const dealtCards = []

    //         // for(let i = 0; i < 2; i++){
    //         //     dealtCards.push(shuffled[Math.floor(Math.random() * deck.length)])
    //         // }
            
    //         // return dealtCards.toString()
            
    //     }



    //     message.author.send(`Your cards are: ${shuffleAndDeal(deck)}`)

    // }
}