const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("📖 Menú de ayuda"),

  async execute(interaction, client) {
    await interaction.deferReply();

    const menu = new StringSelectMenuBuilder()
      .setCustomId("help_menu")
      .setPlaceholder("Selecciona categoría")
      .addOptions(
        client.categories.map(cat => ({
          label: cat,
          value: cat
        }))
      );

    const embed = new EmbedBuilder()
      .setTitle("📖 Zeph Help System")
      .setColor("#0f0f0f")
      .setDescription("Selecciona una categoría abajo");

    await interaction.editReply({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(menu)]
    });
  }
};
