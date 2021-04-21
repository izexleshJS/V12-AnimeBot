const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const izex = new Discord.MessageEmbed()
    .setAuthor(`[Bot İsmi]`, client.user.avatarURL())
    //.setColor("BLACK")
    .addField(`Toplam Komut Sayısı`, `${client.commands.size}`)
    .setFooter("Bot İsmi", message.author.avatarURL())
     message.channel.send(izex)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["saycommand"]
}

exports.help = {
  name: 'komutsay',
  description: '',
  usage: ''
}