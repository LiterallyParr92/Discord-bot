const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('test'),

  async execute(interaction) {
    await interaction.reply("HELP FUNCIONA");
  }
};


