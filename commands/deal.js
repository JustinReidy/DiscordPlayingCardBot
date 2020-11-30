const axios = require("axios")

module.exports = {
    name: "deal",
    description: "Deal Cards to Users",
    usage: "[Player] [Number]",
    execute(message, args){

        let user = message.mentions.members.first().user.id
        let number = args[1]

        if(!user) return message.reply("We can't find that user!")

        
        function createDeck(){
            const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
            const suit = ["H", "D", "S", "C"]

            const deck = new Array()

            for(let i = 0; i < suit.length; i++){
                for(let j = 0; j < value.length; j++){
                    deck.push(` ${value[j]}${suit[i]} `)
                }
            }
            return deck
        }

        function dealCards(deck, number){
            const cards = new Array()
            for(let i = 0; i < number; i++){
                cards.push( deck[Math.floor((Math.random() * deck.length))] )
            }

            return cards
        }

        function saveCards(user, cards) {
            
            // console.log(user)

            const savedData = {
                userId: user,
                cards: cards
            }
            axios.post('http://api.quicksilverdevelopment.com:8080/playerHands', savedData)
            .then(res => {
                message.mentions.members.first().send(cards)
                return true
                })
            .catch(err => {
                console.log(err)
                message.reply("Something went a bit fucky, ask Justin to check the console")
                return false
            })
        }

        let deck = createDeck()
        let cards = dealCards(deck, number)

        saveCards(user, cards)
    }
}