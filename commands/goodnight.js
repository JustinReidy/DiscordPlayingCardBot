module.exports = {
    name: "goodnight",
    aliases: ["gn"],
    execute(message, args){
	let valid = "No"
        message.channel.send(`Bot shutting down, ask Justin to restart it.\n Does this command actually do anything? ${valid}`)
    }
}
