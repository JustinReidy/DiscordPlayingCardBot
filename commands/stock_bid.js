const axios = require("axios")

module.exports = {
    name: "bid",
    description: "Bid on what a specific stock is going to do today",
    usage: "[Ticker] [End of Day Price]",
    execute(message, args){
        const userId = message.author.id
        const username = message.author.username
        
        let ticker = args[0].toUpperCase()
        let bid = args[1]

        const savedData = {
            userId: userId,
            username: username,
            ticker: ticker,
            bid: bid
        }

        axios.post(process.env.BACKEND_API_URL, savedData)
        .then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: `${message.author.username}'s Bid`,
                },
                fields: [{
                    name:"Ticker",
                    value: `${ticker}`
                },
                {
                    name: "Bid",
                    value: `$${bid}`
                }
                ],
                timestamp: new Date(),
                footer: {
                    text: "Remember to check your bets at market close to see if you were correct!"
                }
            }})
            // message.reply(`Your bid for ${ticker} has been saved, please check to see if you were correct at the end of the trading day!`)
        })
        .catch(err => {
            console.log(err)
            message.reply("Something went a bit fucky, ask Justin to check the log") 
        })
        
    }
}