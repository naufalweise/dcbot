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
  let args = message.content.split(' ');
  let command = args.splice(0,1)[0];

  if (command) {
    switch (command) {
      case 'roll':
        message.channel.send(roll(args[0]));
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
var prng = new Alea('hello');

function roll(argument) {
  if (!argument) {
    return
  }
  
  let notation = argument;
  const diceRegex = /\d*(d\d+)/;
  let isMatch = diceRegex.test(notation);
  while (isMatch) {
    let match = diceRegex.exec(notation)[0];
    notation = notation.replace(diceRegex,getRoll(match));
    isMatch = diceRegex.test(notation);
  }
  return notation;
}

function getRoll(notation) {
  //AdX
  let variable = notation.split('d');
  let diceFace = variable.splice(variable.length - 1)[0];
  let diceAmount = variable[0] || 1;
  let result = "";
  for(let i=0; i<diceAmount; i++) {

    result += Math.floor(prng() * diceFace) + 1;
    if (diceAmount-i != 1) {
      result+= ", "
    }
  }
  return "("+result+")";
}

client.login(process.env.botToken || 'NDkzMDY0OTI3Mzk3OTM3MTY1.Dq12dA.dVl5AUHbOUo24_I5DuDdm4aPzcw');