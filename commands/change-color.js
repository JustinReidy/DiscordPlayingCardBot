require('dotenv').config()
const axios = require('axios')

module.exports = {
    name: "changecolor",
    description: "Change the color of my light to a random color",
    aliases: ["color"],
    execute(message, args){

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

        const setLightToRandomColor = async () => {
            const hue = Math.floor(Math.random() * 65535) + 1
            const sat = 200
            const bri = 175

        	controlLight(4, true, bri, hue, sat)
        }


        setLightToRandomColor()
    }
}