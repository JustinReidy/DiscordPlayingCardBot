const { execute } = require("./ping");

module.exports = {
    name: "beep",
    description: "Boop.",
    execute(message, args){
        message.reply("Boop.")
    }
}