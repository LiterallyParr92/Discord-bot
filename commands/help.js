const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('💡 | Muestra la lista de comandos disponibles'),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle('📖 | Comandos del bot')
      .setColor('#5990A8')
      .setDescription('Aquí tienes la lista de comandos disponibles:')
      .addFields(
        { name: '📡 | ping', value: 'Muestra la latencia del bot' },
      )
      .setFooter({ text: 'Zeph • desarrollada por ♱ - Parra' });

    await interaction.reply({ embeds: [embed] });
  }
};
