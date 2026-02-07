const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde con Pong! 🏓'),
    async execute(interaction, client) {
        const latency = Date.now() - interaction.createdTimestamp;
        const websocket = client.ws.ping;
        await interaction.reply(`Pong! 🏓 Latencia: ${latency}ms. WebSocket: ${websocket}ms`);
    }
};


