module.exports = {
    name: "uwu",
    description: "You know ;D",
    aliases: ["cursed"],
    cooldown: 300,
    usage: "[Number]",
    execute(message, args){
        let imageArr = ["https://i.redd.it/19yhstu3j7c61.jpg", "https://cdn.discordapp.com/attachments/758217175202398208/809831427050700830/image0.jpg","https://cdn.discordapp.com/attachments/758217175202398208/809832884919205939/image0.jpg", "https://preview.redd.it/2c7tnahdcde61.jpg?width=960&crop=smart&auto=webp&s=5d49dcc654551670bfc86732e771e09639d1928b", "https://cdn.discordapp.com/attachments/758217175202398208/809828824186617866/image0.jpg", "https://cdn.discordapp.com/attachments/768682207983697943/801364870233587722/Fuck_Zeff_2_electric_boogaloo_.jpg", "https://cdn.discordapp.com/attachments/758217175202398208/809828457927147630/image0.jpg" ,"https://cdn.discordapp.com/attachments/758217175202398208/809828230638338058/image0.jpg", "https://cdn.discordapp.com/attachments/758217175202398208/809826953031843890/image0.jpg", "https://cdn.discordapp.com/attachments/455905078596075521/809695065629786142/iu-1.png", "https://i.pinimg.com/originals/8e/7d/83/8e7d836147ffc04abf7b90d79e33d132.png", "https://cdn.discordapp.com/attachments/758217175202398208/809826255556968448/image0.jpg", "https://cdn.discordapp.com/attachments/758217175202398208/809826426382843914/image0.jpg", "https://www.rollingstone.com/wp-content/uploads/2021/02/shia-denies.jpg?resize=1800,1200&w=450", "https://i.redd.it/a5wcv1p1lac61.jpg", "https://preview.redd.it/jw8l0k07ech61.jpg?width=640&crop=smart&auto=webp&s=cf1ab0e9f6f467a43f02a79ed0b0646e7e160c82", "https://i.redd.it/ykeoivdavgh61.jpg", "https://preview.redd.it/7m3829imach61.jpg?width=640&crop=smart&auto=webp&s=3de31d367bbb5d018fe741668121706a24c8a7d5", "https://i.redd.it/bq4jhnswp2f61.jpg", "https://preview.redd.it/zrl8nhq5nye61.png?width=640&crop=smart&auto=webp&s=c6b1dbc048a6675ff8239130f677b8352d77ab51", "https://i.redd.it/la4682g714e61.jpg", "https://preview.redd.it/3befsk0ozqd61.jpg?width=640&crop=smart&auto=webp&s=43e986fc537a59f8da4fb55708fa0a17d520b49e", "https://preview.redd.it/mjoou5thv9c61.jpg?width=640&crop=smart&auto=webp&s=de6cdef23cccf8f0a2b35a4c450db01eef1051ba", "https://preview.redd.it/wfopnhr699c61.jpg?width=640&crop=smart&auto=webp&s=40e05fdb7408d323c018e58ffe04705bfcff9eef", "https://preview.redd.it/msdi5psxumb61.jpg?width=640&crop=smart&auto=webp&s=fc9a682f08ef578fdefbf1deb9933a703bdd20c3"] 
        let num = args[0]
        if(num > 10) return message.channel.send("@Everyone Pick a number less than 10 assfuck")

        if ( typeof(args[0]) === "undefined" ){
            num = 1
        }
        
        for(let i = 0; i < num; i++ ){

            let imageIndex = imageArr[Math.floor(Math.random() * imageArr.length)]

            message.channel.send({embed: {
                color: 4206969,  
                image: {
                    url: imageIndex 
                }
            }}) 

        }
    }
}