const axios = require('axios')
require('dotenv').config()

module.exports = {
    name: "ravemode",
    description: "Make lights behind desk shift to random colors over x time",
    usage: '<time in seconds>',
    aliases: ["rave"],
    execute(message, args){
        
        const controlLight = (on, bri, hue, sat) => {
            
            
            sleep(2000)
            axios.put(
                `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/4/state`, 
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

            console.log(time)
            
            for(let i = 0; i < time; i++){
                
                
                const hue = Math.floor(Math.random() * 65535) + 1
                const sat = Math.floor(Math.random() * 254) + 1
                const bri = 254
                
                controlLight(true, bri, hue, sat)
                await sleep(30000)
                
            }
        }


        raveModeEngage(parseInt(args[0]))

    }
}
