const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pogcount')
		.setDescription('Replies with how many pogs you have!'),
	async execute(interaction) {
		numOfPogs = 4;
		await interaction.reply(`You have ${numOfPogs} pogs!`);
	},
};
