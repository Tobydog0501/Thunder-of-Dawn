const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name:"guns",

    async execute(inter,Discord){
        const gun1 = inter.fields.getTextInputValue('gun1');
        const gun2 = inter.fields.getTextInputValue('gun2');
        const chn = await inter.guild.channels.fetch("1045346751323852901");
        const exampleEmbed = new EmbedBuilder()
            .setTitle("考試申請")
            .setDescription(`${inter.member}申請考下列槍種`)
            .setFields([{name:"槍種一",value:gun1,inline:true},{name:"槍種二",value:gun2,inline:true}])
            .setColor("Green");
        
        const row = new ActionRowBuilder()
			.setComponents([
                new ButtonBuilder()
                    .setCustomId('take1')
                    .setLabel(`擔任槍種一考官`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('take2')
                    .setLabel(`擔任槍種二考官`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId("reject")
                    .setLabel("拒絕考生")
                    .setStyle(ButtonStyle.Danger)
        ]);

        await chn.send({embeds:[exampleEmbed],components:[row]});
        await inter.reply({content:`申請完成`,ephemeral:true})
    }
}