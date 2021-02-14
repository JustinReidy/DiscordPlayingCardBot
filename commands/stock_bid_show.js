const axios = require("axios")

module.exports = {
    name: "showbid",
    aliases: ["showbids", "bids"],
    description: "Shows current bit for user and the current price for the ticker",
    usage: "",
    execute(message, args){
        const userId = message.author.id

        axios.get(`${process.env.BACKEND_API_URL}/${userId}`)
        .then(res => {

            let today = new Date()
            console.log(today)

            // Check to see if it is the Weekend
            if(today.getDay() === 6 || today.getDay() === 0) return message.reply("It is the weekend, please check back at 4pm Monday(Unless bank holiday) to see how your bets did!")

            // Check to see if the market has closed for the day(4pm EST)
            if( /*Chekck if before market open*/  today.getHours() > 8 && /*Check if after market close*/today.getHours() < 15) return message.reply("The stock market has not closed for the day yet, please check back at 4pm EST")

            const objs = []

            const { data } = res


            const promise = new Promise((resolve, reject) => {
                data.forEach(bid => {  
                    axios.get(`https://finnhub.io/api/v1/quote?symbol=${ bid.ticker }&token=${ process.env.FINNHUB_API_KEY }`)
                    .then(res => {
    
                    
                    objs.push({name: `Your bid for ${ bid.ticker }: $${ bid.bid }`, value:`Actual Close for ${ bid.ticker }: $${ res.data.c }` })
    
                    })
                    .catch(err => {
                        console.log(err)
                        message.reply("Something went a bit fucky. Have Justin check the console")
                    })

                    setTimeout(resolve, 1000)

                })

            })

            // console.log(`After the Axios call: ${objs}`)

            Promise.all([promise]).then((values) => {
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                        name: `${message.author.username}'s Bids`
                    },
                    fields: [...objs]
                }})
            })
            
            
            
            
        })
        .catch(err => {
            console.log(err)
            message.reply('Something went a bit fucky, have Justin check the log')
        })

    }
}