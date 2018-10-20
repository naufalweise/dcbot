const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

/* client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});
*/

client.on('message', message => {
  var messageArray = mesage.content.split(' ');
  var command = messageArray[0];
  var args = messageArray.splice(1);

  if (command && args) {
    switch (command) {
      case 'roll':
        message.channel.send(roll(args));
        break;
    
      case 'ping':
        message.channel.send('pong');
        break;

      default:
        break;
    }
  }
});

var Alea = require('alea');
var prng = new Alea('meme');

function roll(argument) {
  let notation = argument;
  const diceNot = /\d*(d\d+)/;
  while (diceNot.match(notation)) {
    let match = diceNot.exec(notation)
    notation.replace(diceNot,getRoll(match));
  }
  return notation;
}

function getRoll(notation) {
  //AdX
  let variable = notation.split('d');
  let diceFace = variable.splice(variable.length);
  let diceAmount = variable[0] || 1;
  
  return prng() * diceFace * diceAmount;
}
client.login('NDkzMDY0OTI3Mzk3OTM3MTY1.DqLSGg.QrVZ5t9fO5fzHtG0HQ7U9uNqa0c');