// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildMessages] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login('irwx9hFjif4ePalROAvCOSO2I7TT9_Rc');

