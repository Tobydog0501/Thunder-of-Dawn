const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const fs = require('fs');


module.exports = {
    name:'snipe',
    description:"Check deleted msg",
    category:"test",
    aliases:['s'],
    async execute(bot,msg,args){
        const ui = JSON.parse(fs.readFileSync('./env.json', 'utf-8'));
        try{
            let msgList = ui[msg.guild.id][msg.channel.id]
            msgList = msgList.map((v,i)=>{
                
                return([{
                    name:"內容",
                    value:v["content"],
                    inline:true
                },{
                    name:"時間",
                    value:`${v["date"].split('T')[0]} ${v["date"].split("T")[1].split(".")[0]}`,
                    inline:true
                },{
                    name:"傳送者",
                    value:`<@${v["author"]}>`,
                    inline:true
                }])
            })
            let ebd = new EmbedBuilder()
                .setTitle("訊息刪除查詢功能")
                .setColor("Random")
                .setDescription("於本頻道刪除的訊息:")
                .setTimestamp();
            
            for(var s of msgList){
                ebd.addFields(s[0]);
                ebd.addFields(s[1]);
                ebd.addFields(s[2]);
            }
            await msg.reply({embeds:[ebd]})
        }catch (e){
            await msg.reply("查無訊息")
        }
      
    }
  }