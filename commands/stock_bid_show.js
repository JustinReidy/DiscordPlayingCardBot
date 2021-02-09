const axios = require("axios")

module.exports = {
    name: "showbid",
    aliases: ["showbids", "bids"],
    description: "Shows current bit for user and the current price for the ticker",
    usage: "",
    execute(message, args){
        const userId = message.author.id

        let data = []

        axios.get(`${process.env.BACKEND_API_URL}/${userId}`)
        .then(res => {
            data = res.data
            
            const mappedData = data.map(bid => {
                // console.log(bid.ticker)
                
                axios.get(`https://finnhub.io/api/v1/quote?symbol=${bid.ticker}&token=${process.env.FINNHUB_API_KEY}`)
                .then(res => {
                    // console.log(res)
                    message.reply(`Your bid for ${bid.ticker} was $${bid.bid}. At the moment ${bid.ticker} is at $${res.data.c}`)
                })
            })
            
        })
        .catch(err => {
            console.log(err)
            message.reply('Something went a bit fucky, have Justin check the log')
        })

    }
}