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

client. on
client.on('message', message => {
  var messageArray = mesage.content.split(' ');
  var command = messageArray[0];
  var args = messageArray.splice(1);

  if (command && args) {
    switch (command) {
      case 'roll':
        roll(args)
        break;
    
      default:
        break;
    }
    message.channel.send('pong');
  }
});

var Alea = require('alea');
var prng = new Alea();

function roll(argument) {
  var result = [];
  var diceNotation = argument.split('+');
  diceNotation.map(die => {
    var dieAmount;
    var dieSide;
    if (die.split('d').length == 1) {
      dieAmount = 1;
      dieSide = die.split('d')[0];
    } else {
        dieAmount = die.split('d')[0];
        dieSide = die.split('d')[1]
        result.push(prng(dieAmount,dieSide))
    }
  });


}

client.login('NDkzMDY0OTI3Mzk3OTM3MTY1.DqLSGg.QrVZ5t9fO5fzHtG0HQ7U9uNqa0c');