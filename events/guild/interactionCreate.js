const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = async(Discord,bot,inter)=>{
  if(inter.isButton()){
    const modal = bot.modalInter.get(inter.customId);
    if(modal){
      try{
        await modal.execute(inter,Discord,bot);
      }catch(err){
        await inter.reply({content:"好像哪裡有問題...",ephemeral:true});
        console.error(err);
      }
    }
    
  }else if(inter.isSelectMenu()){
    
  }else if(inter.isCommand()||inter.isUserContextMenuCommand()){
    
    const slashCommand = bot.commands.get(inter.commandName);
    if(slashCommand){
      try{
        await slashCommand.execute(inter,Discord,bot);
      }catch(err){
        await inter.reply({content:"好像哪裡有問題...",ephemeral:true});
        console.error(err);
      }
    }
    
    }else if(inter.isModalSubmit()){
      //const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
      await inter.reply({content:"ok",ephemeral:true});

    }
  
}