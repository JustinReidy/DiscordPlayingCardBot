module.exports = {
    name: "server",
    description: "Gives server information",
    execute(message, args){
        message.channel.send(`This servers name is: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`)
    }
}