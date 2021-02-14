const axios = require('axios')

module.exports = {
    name:"crypto",
    description: "Get current price for a cryptocurrency",
    aliases: ["c"],
    usage: "[Crypto Acronym]",
    execute(message, args){
        let symbol = args[0].toUpperCase()
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=${symbol}`)
        .then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: `${symbol}`,
                    icon_url: `${res.data[0].logo_url}`
                },
                fields: {
                    name: `${symbol}`,
                    value: `$${res.data[0].price}`
                },
                footer: {
                    text:'[Crypto Market Cap & Pricing Data Provided By Nomics.](https://nomics.com)',
                    setUrl: `https://nomics.com`
                }
            }})
        })
    }
}