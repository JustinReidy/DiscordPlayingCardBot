const axios = require ("axios")

module.exports = {
    name: "quote",
    description: "Shows current pricing information for given ticker",
    usage: "[Ticker]",
    execute(message, args){
        const ticker = args[0].toUpperCase()
    
        // Reachout to Finnhub, grab quote and return in a message what the current price is.
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${process.env.FINNHUB_API_KEY}`)
        .then((res) => {

            let {c, o, h, l, pc} = res.data
            // console.log(message)
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: ticker,
                    icon_url: `https://finnhub.io/api/logo?symbol=${ticker}`
                },                
                title: `Quote for ${ticker}`,
                url: `https://www.nasdaq.com/market-activity/stocks/${ticker}`,
                fields: [{
                    name: "Current Price",
                    value: `$${c}`
                },
                {
                    name: "Open Price",
                    value: `$${o}`
                },
                {
                    name: "High Price",
                    value: `$${h}`
                },
                {
                    name: "Low Price",
                    value: `$${l}`
                },
                {
                    name: "Previous Close",
                    value: `$${pc}`
                }    
                ],
                timestamp: new Date(),
                footer: {
                    // icon_url: client.user.avatarURL,
                    text: "Data from Finnhub and Nasdaq"
                }
                
            }})
            // message.reply(`The current price for Ticker **${ticker}** is $${res.data.c}\n 
            // The Open price was $${res.data.o}\n
            // The High Price was $${res.data.h}\n
            // The Low Price was $${res.data.l}\n
            // The Previous Close was $${res.data.pc}`)
        })
        .catch((err) => {
            console.log(err)
            message.reply('Something went fucky, ask Justin to check the console')
        })
        
    }
}