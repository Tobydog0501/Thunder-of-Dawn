const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  data:new SlashCommandBuilder()
	      .setName('modal')
	      .setDescription('test')
      	,
  async execute(inter,Discord){
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('guns')
					.setLabel('點擊來申請考試')
					.setStyle(ButtonStyle.Success),
			);

    const exampleEmbed = new EmbedBuilder()
        .setTitle("注意事項")
        .setDescription("Undefined")
        .setColor("Green")

		await inter.reply({ embeds: [exampleEmbed] , components: [row] });
    
  }
}