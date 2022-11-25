const { PermissionsBitField } = require('discord.js');

module.exports = {
    name:"take1",

    async execute(inter,Discord){
        const member = await inter.guild.members.fetch(inter.message.embeds[0].description.match(/[0-9]+/)[0]);
        await inter.guild.channels.create({name:`${member.tag}第一考場`,parent:"1045350645135327322",permissionOverwrites: [
            {
                id: inter.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel],
            },
            {
                id: inter.user.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
            },
            {
                id: member.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
            },
        ]});
        console.log(inter.message.components);
        await inter.reply({content:"完成",ephermeral:true});
    }
}