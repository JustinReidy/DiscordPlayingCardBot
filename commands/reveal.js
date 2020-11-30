const axios = require("axios")

module.exports = {
    name: "reveal",
    description: "Reveals targeted users hand",
    usage: "[user]",
    execute(message, args){
        const userId = message.mentions.members.first().user.id

        // Check to see if user has hand already
        axios.get(`http://api.quicksilverdevelopment.com:8080/playerHands`)
        .then((res) => {})
        
        function getHand(userId){
            axios.get(`http://api.quicksilverdevelopment.com:8080/playerHands/${userId}`)
            .then((res) => {
                message.reply(`Here are ${args[0]} cards: ${res.data[0].cards}`)
                return true
            })
            .catch((err) => {
                console.log(err)
                message.reply('Something went fucky, ask Justin to check the console')
            })
        }

        getHand(userId)

        
            axios.delete(`http://api.quicksilverdevelopment.com:8080/playerHands/${userId}`)
            .then((res) => {
                console.log("Entry deleted successfully")
            })
            .catch((err) => {
                console.log(err)
                message.reply("Something went fucky, ask Justin to check the console")
            })
        
    }
}