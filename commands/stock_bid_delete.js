const axios = require('axios')

module.exports = {
    name: "deletebid",
    aliases:["deletebids"],
    description: "Deletes your current bids",
    usage: '[number]',
    execute(message, args){
        const userId = message.author.id
        let numToDelete = args[0]

        for (let i = 0; i < numToDelete; i++){
            axios.delete(`${process.env.BACKEND_API_URL}/${userId}`)
            .then(res => {
                
            }) 
            .catch(err => {
                console.log(err)
                message.reply('Something went a bit fucky, have Justin check the console.')
            })


            if(i == numToDelete - 1){
                message.reply(`${numToDelete} of your bids have been deleted`)
            }
        }

        

        // if(numToDelete === 0){
        //     message.reply(`Your bids have been deleted!`)
        // }

    }
} 