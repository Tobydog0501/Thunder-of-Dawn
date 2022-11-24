const fs = require('fs');
const { REST, Routes } = require('discord.js');
const path = "./token.json"
const token = process.env.tkn
const TOKEN = fs.existsSync(path)?require('./token.json').tkn:process.env.tkn

var commands = [];


// Place your client and guild ids here
const clientId = "1045317003763785801"
const guildId = '1044264781240086599';

module.exports = async (reset)=>{
  const SlashcommandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));
  const rest = new REST({ version: '9' }).setToken(TOKEN);
  var err = true;

  (async () => {
    return new Promise(async (res,rej)=>{
      for (const file of SlashcommandFiles) {
      const command = require(`./slashCommands/${file}`);
      commands.push(command.data.toJSON());
      }
      if(reset) commands = [];
      try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
        err = false
      } catch (error) {
        var errors = error
        err = true
      }
      if(!err) res('Successfully reloaded application (/) commands.');
      else rej(`Unsuccessful. Reason:${errors}`);
      
    })
  })().then(m=>{
      return new Promise((res,rej)=>{
        res(m);
      })
    })
    .catch(err=>{
      return new Promise((res,rej)=>{
        rej(err);
      })
    })
}