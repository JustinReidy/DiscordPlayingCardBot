module.exports = {
    name: "user-info",
    description: "Gives user information",
    execute(message){
        message.channel.send(`Your Username: ${message.author.username}\nUser ID: ${message.author.id}`)
    },
}