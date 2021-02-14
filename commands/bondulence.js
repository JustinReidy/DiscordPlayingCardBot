module.exports = {
    name: "bondulance",
    aliases: ["bond", "stronk"],
    description: "Dispatch a bondulance",
    cooldown: 10,
    execute(message, args) {

        message.channel.send({embed: {
            title: "Bondulence has been dispatched",
            image:{
                 url: "https://media.discordapp.net/attachments/585703352508219409/660379876372774912/Bondulance_Dispatched.gif"
            }
        }})
    }
}