require('dotenv').config()
const axios = require('axios')
const fs = require('fs')

module.exports = {
    name:"togglefanlights",
    description: "Toggle the lights in my fan On or Off",
    aliases: ["fan"],
    // cooldown: 300,
    usage: "<On:Off> <Num between 1 & 254>",
    execute(message, args){
        
        let today = new Date()

        if( /*Chekck if before 7am*/  today.getHours() < 7 && /*Check if after 11pm*/today.getHours() < 23 && message.author.tag != "Zenithian#7410") return message.reply("Hey Tinycock, Rude, trying to fuck with Justin when he is sleeping, you should think before you act.")

        if(args[0] === undefined) return message.reply("Please Indicate If You Want To Turn The Lights On or Off! Chucklenuts")
        if(!isNaN(parseInt(args[0]))) return message.reply("Please Indicate If You Want To Turn The Lights On or Off! Chucklenuts")
        // if(!args[1]) return message.reply("Please add a brightness between 1 and 254")

        const isSetTrue = (args[0].toUpperCase() == "ON")
        const brightness = (args[1] || 254)

        if(brightness < 0) return message.reply('Please pick a number larger that 1')
        if(brightness > 254) return message.reply('Please pick a number smaller than 254!')

        const ids = [1, 2, 3]

        const controlLight = async(lightId, on, brightness) => {

            const bri = parseInt(brightness)        

            try {
                return await axios.put(
                    `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`, 
                    {
                        on,
                        ...( bri && { bri } ),
                    })
            } catch(err){
                console.error(err)
            }

        }

        const controlAllLights = (on, bri) => {
            ids.forEach(id => {
                controlLight(id, on, bri)
            })

            let onOff = "Off"
            if(on){
                onOff = "On"
            }

            console.log(`${message.author.tag} turned the fan lights ${onOff}`)
            return message.reply(`Fan Lights Turned ${onOff}`)
        }

        let sender = {
            user: message.author.tag,
            command: `Toggle Fan Light < ${isSetTrue} > < ${brightness} >`,
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

         controlAllLights(isSetTrue, brightness)
    }
}