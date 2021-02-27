require('dotenv').config()
const axios = require('axios')

module.exports = {
    name:"togglefanlights",
    description: "Toggle the lights in my fan On or Off",
    aliases: ["fan"],
    // cooldown: 30,
    usage: "<On:Off> <Num between 1 & 254>",
    execute(message, args){
        const isSetTrue = (args[0].toUpperCase() == "ON")
        const brightness = (args[1] || 254)
        console.log(brightness)

        if(brightness < 0) return message.reply('Please pick a number larger that 1')
        if(brightness > 254) return message.reply('Please pick a number smaller than 254')

        // console.log(isSetTrue)
        const ids = [1, 2, 3]

        const controlLight = async(lightId, on, brightness) => {

            const bri = parseInt(brightness)
            console.log(typeof(bri))
        

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
        }

         controlAllLights(isSetTrue, brightness)
    }
}