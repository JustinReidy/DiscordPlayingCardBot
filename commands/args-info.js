module.exports = {
    name: 'args-info',
    description: "Argument Information",
    args: true,
    usage: '<user> <role>',
    execute(message, args){
        if (args[0] === 'foo'){
            return message.channel.send('bar')
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        // message.channel.send(`First argument: ${args[0]}`)
    }
}