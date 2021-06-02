const axios = require('axios')
const fs = require('fs')
require('dotenv').config()

module.exports = {
    name: "ravemode",
    description: "Make lights behind desk shift to random colors over x time",
    usage: '<time in seconds>',
    aliases: ["rave"],
    // cooldown: 300,
    execute(message, args){

        let today = new Date()

        if( /*Chekck if before 7am*/  today.getHours() < 7 && /*Check if after 11pm*/today.getHours() < 23 && message.author.tag != "Zenithian#7410") return message.reply("Hey Tinycock, Rude, trying to fuck with Justin when he is sleeping, you should think before you act.")

        
        if(args[0] > 150) return message.reply("Hey fuckface, pick a smaller damn number")

        const ids = [6, 7]

        const controlLight = (lightId, on, bri, hue, sat) => {
            
            axios.put(
                `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`, 
                {
                    on,
                    ... ( bri && { bri } ),
                    ... ( hue && { hue } ),
                    ... ( sat && { sat })
                }).then(res => {
                })
                .catch(err => {
                    console.error(err)
                }) 
                
            

        }

        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

        const raveModeEngage = async (time) => {

            console.log(`${message.author.tag} started the rave`)
            message.reply("Congrats, You have started a rave in Justin's bedroom")
            
            for(let i = 0; i < time; i++){
                
                
                const hue1 = Math.floor(Math.random() * 65535) + 1
                const sat1 = Math.floor(Math.random() * 254) + 1
                const hue2 = Math.floor(Math.random() * 65535) + 1
                const sat2 = Math.floor(Math.random() * 254) + 1
                const bri = 255
                
                controlLight(6, true, bri, hue1, sat1)
                controlLight(7, true, bri, hue1, sat1)
                // controlLight(7, true, bri, hue2, sat2)
                await sleep(1500)
                
            }

        }

        let sender = {
            user: message.author.tag,
            command: `Rave Mode < ${args[0]} >`,
            timestamp: today,

        }

        let data = JSON.stringify(sender, null, 2)

        fs.readFile('./commandlog.json', function (err, data) {
            var json = JSON.parse(data)

            json.push(sender)

            fs.writeFile('./commandlog.json', JSON.stringify(json, null, 2), (err) => {
                if(err) throw err
            })
        })


        raveModeEngage(parseInt(args[0]))

    }
}
