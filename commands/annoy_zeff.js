module.exports = {
    name: "annoy",
    description: "Use to annoy a specified user",
    usage: "[@user] [num of messages] [image URL]",
    cooldown: 600,
    execute(message, args){
        let user = message.mentions.members.first()
        let num = args[1]
        let url = args[2] || "https://www.youtube.com/watch?v=lHbAsndSKXA&ab_channel=InternetCommentEtiquettewithErik"
        console.log(user)
        
        if(!user) return message.reply("We can't find that user")

        // if(num > 100) return message.reply("Please choose a number less than 20, fuck face")

        for(let i = 0; i < num; i++){
            console.log(i)
            user.send(url)
        }


        
    }
}