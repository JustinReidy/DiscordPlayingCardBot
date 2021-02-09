const axios = require ("axios")

module.exports = {
    name: "quote",
    description: "Shows current pricing information for given ticker",
    usage: "[Ticker]",
    execute(message, args){
        const ticker = args[0].toUpperCase()           
        // Reachout to Finnhub, grab quote and return in a message what the current price is.
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${apiKey}`)
        .then((res) => {
            console.log()
            message.reply(`The current price for Ticker **${ticker}** is $${res.data.c}\n 
            The Open price was $${res.data.o}\n
            The High Price was $${res.data.h}\n
            The Low Price was $${res.data.l}\n
            The Previous Close was $${res.data.pc}`)
        })
        .catch((err) => {
            console.log(err)
            message.reply('Something went fucky, ask Justin to check the console')
        })
        
    }
}