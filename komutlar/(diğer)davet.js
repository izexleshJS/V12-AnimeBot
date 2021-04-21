const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(clientizex, messageizex, argsizex) => {

  const izexlesh = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setAuthor(`Daijoubu Davet`, clientizex.user.avatarURL())
    .setThumbnail(clientizex.user.avatarURL())
    .addField(
      "Bot Davet Linki",
      `Beni Eklemene Sevindim! [Tıkla](https://discord.com/oauth2/authorize?client_id=781054130613518357&scope=bot&permissions=805314622)`
    )
    .setFooter(`Daijoubu Davet Menüsü`, clientizex.user.avatarURL());
  return messageizex.channel.send(izexlesh);
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "Botu Davet Etme!",
  usage: ""
};
//izexlesh