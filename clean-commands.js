const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        // Borra todos los comandos globales
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] });
        console.log('✅ Comandos globales eliminados');

        // Borra comandos del servidor de prueba
        if (process.env.GUILD_ID) {
            await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: [] });
            console.log('✅ Comandos de servidor eliminados');
        }
    } catch (error) {
        console.error(error);
    }
})();
