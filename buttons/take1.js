module.exports = {
    name:"take1",

    async execute(inter,Discord){
        const member = inter.guild.members.fetch(inter.message.embeds[0].description.match(/[0-9]+/)[0])
        await inter.guild.channels.create({name:`aa`,parent:"1045350645135327322", permissionOverwrites:[
            {id:inter.guild.roles.everyone,deny:[
                'VIEW_CHANNEL'  //sus
            ]}
            ,{id:inter.user,allow:[
                'VIEW_CHANNEL','SEND_MESSAGES'
            ]}
            ,{id:member,allow:[
                'VIEW_CHANNEL','SEND_MESSAGES'
            ]}
          ]})
    }
}