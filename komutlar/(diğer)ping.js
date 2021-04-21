const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  return message.channel.send('🏓 Pong! `'+client.ws.ping+'` ms.');

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ms"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Botun Pingini Gösterir!",
  usage: ""
};
