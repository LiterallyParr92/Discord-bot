const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Muestra la latencia del bot"),

  async execute(interaction, client) {
    const latency = Date.now() - interaction.createdTimestamp;
    const websocket = client.ws.ping;

    let status = "🟢 Excelente";
    if (latency > 200) status = "🟡 Media";
    if (latency > 400) status = "🔴 Alta";

    const embed = new EmbedBuilder()
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
      .setTitle("🏓 Ping del sistema")
      .setDescription("Estado de conexión del bot")
      .setColor("#5865F2")
      .addFields(
        { name: "🤖 Latencia del Bot", value: `\`${latency} ms\``, inline: true },
        { name: "🌐 WebSocket", value: `\`${websocket} ms\``, inline: true },
        { name: "📊 Estado", value: status, inline: false }
      )
      .setFooter({ text: "Zeph Bot • desarrollado por Parra" })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};




