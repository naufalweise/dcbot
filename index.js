const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login('NDkzMDY0OTI3Mzk3OTM3MTY1.DqLSGg.QrVZ5t9fO5fzHtG0HQ7U9uNqa0c');