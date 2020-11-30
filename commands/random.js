module.exports = {
    name: "random",
    description: "random number gen",
    execute(message, args) {
        const number = Math.random()

        message.reply(number)
    }
}