require('dotenv').config()
const axios = require('axios')

module.exports = {
    name:"toggledesklights",
    description: "Toggle the lights in my desk lamp, On or Off",
    aliases: ["desk"],
    cooldown: 30,
    usage: "<On:Off>",
    execute(message, args){
        const isSetTrue = (args[0].toUpperCase() == "ON")

        // console.log(isSetTrue)
        const ids = [4, 5]

        const controlLight = async(lightId, on, bri, hue, sat) => {


            try {
                return await axios.put(
                    `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`, 
                    {
                        on,
                        ... ( bri && { bri } ),
                        ... ( hue && { hue } ),
                        ... ( sat && { sat })
                    })
            } catch(err){
                console.error(err)
            }

        }

        const controlAllLights = (on) => {
            ids.forEach(id => controlLight(id, on))
        }

         controlAllLights(isSetTrue)
    }
}