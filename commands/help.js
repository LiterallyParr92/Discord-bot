const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Te muestra el menú de ayuda con mis comandos"),

  async execute(interaction) {

    // 📂 Contar categorías y comandos
    const commandsPath = path.join(__dirname);
    const files = fs.readdirSync(commandsPath).filter(f => f.endsWith(".js"));

    const totalCommands = files.length;
    const totalCategories = 4; // cambia si tienes más

    // 📖 Embed principal
    const embed = new EmbedBuilder()
      .setTitle("📖 | Menú de ayuda")
      .setColor("#2f3136")
      .setDescription(`Tengo **${totalCategories} categorías** y **${totalCommands} comandos** disponibles.\n\nSelecciona una categoria abajo y según la categoria se mostraran comandos relacionados y sus descripciones.\n\n🎊| Entretenimiento\n🔩| Moderación\n🔎| Utilidad\n🎵| Música`)
      .setFooter({ text: "Zeph • desarrollada por ♱ - Parra" })
      .setTimestamp();

    // 📂 Select Menu
    const menu = new StringSelectMenuBuilder()
      .setCustomId("help_menu")
      .setPlaceholder("Selecciona una categoría")
      .addOptions([
        {
          label: "🎊 Entretenimiento",
          description: "Comandos divertidos",
          value: "fun",
        },
        {
          label: "🔩 Moderación",
          description: "Comandos de staff",
          value: "mod",
        },
        {
          label: "🔎 Utilidad",
          description: "Comandos útiles",
          value: "utils",
        },
        {
          label: "🎵 Música",
          description: "Comandos musicales",
          value: "music",
        },
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    await interaction.reply({ embeds: [embed], components: [row] });
  }
};

