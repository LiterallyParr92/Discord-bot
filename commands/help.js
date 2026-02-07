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
        { name: '🎊 | entretenimiento', value: 'Muestra la lista de los comandos de entretenimiento' },
        { name: '🔩 | moderación', value: 'Muestra la lista de los comandos de moderación' },
        { name: '🔎 | utilidad', value: 'Muestra la lista de los comandos de utilidad' },
        { name: '📀 | música', value: 'Muestra la lista de los comandos de música' },
      )
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: 'Zeph • desarrollada por ♱ - Parra' });

    await interaction.reply({ embeds: [embed] });
  }
};
