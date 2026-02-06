const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [53608447]
});

client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

console.log("TOKEN:", process.env.TOKEN ? "EXISTE" : "NO EXISTE");
client.login(process.env.TOKEN);
