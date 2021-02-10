const axios = require("axios")

module.exports = {
    name: "showbid",
    aliases: ["showbids", "bids"],
    description: "Shows current bit for user and the current price for the ticker",
    usage: "",
    execute(message, args){
        const userId = message.author.id

        const bids = []

        const promise = new Promise((resolve, reject) => {

        })

        axios.get(`${process.env.BACKEND_API_URL}/${userId}`)
        .then(res => {
            // createEmbed(res.data)

            // const mappedData = res.data.map(bid => {
                
            //     axios.get(`https://finnhub.io/api/v1/quote?symbol=${bid.ticker}&token=${process.env.FINNHUB_API_KEY}`)
            //     .then(res => {
            //         // console.log(res)
            //         message.reply(`Your bid for ${bid.ticker} was $${bid.bid}. At the moment ${bid.ticker} is at $${res.data.c}`)
            //         // Create a global "Data" array, push res.data to it.
            //         // then call a createEmbed() function where it takes the global "Data" array, and maps over it to create an array of field objects with the correct data
            //         // then in the fields: [] feed in the array of objects. 


            //     })
        // })

            // promiseAll()


            const objs = []

            const { data } = res

            data.forEach(bid => {
                objs.push({ name: `${bid.ticker}`, value: `$${bid.bid}` })

                // axios.get(`https://finnhub.io/api/v1/quote?symbol=${ bid.ticker }&token=${ process.env.FINNHUB_API_KEY }`)
                // .then(res => {

                //     // console.log(res.data)
                //     objs.push({name: `Your bid for ${ bid.ticker }: $${ bid.bid }`, value:`Actual Close for ${ bid.ticker }: $${ res.data.c }` })

                //     console.log(`inside the second axios call: ${ objs }`)

                // })
                // .catch(err => {
                //     console.log(err)
                //     message.reply("Something went a bit fucky. Have Justin check the console")
                // })
            })

            // console.log(`After the Axios call: ${objs}`)
            
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: `${message.author.username}'s Bids`
                },
                fields: [...objs]
            }})
            
            
            
        })
        .catch(err => {
            console.log(err)
            message.reply('Something went a bit fucky, have Justin check the log')
        })

    }
}