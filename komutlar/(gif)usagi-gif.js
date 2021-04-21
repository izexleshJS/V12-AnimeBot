const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi1.gif?v=1618230426292","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi2.gif?v=1618230427192","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi3.gif?v=1618230448597","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi5.gif?v=1618230448957","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi4.gif?v=1618230450608","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi7.jpg?v=1618230504303","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi8.gif?v=1618230506045","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi6.gif?v=1618230508017","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi9.gif?v=1618230533184","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi11.gif?v=1618230533594","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi10.gif?v=1618230533680","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi12.gif?v=1618230557919","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi13.gif?v=1618230560441","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi14.gif?v=1618230568901","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi15.gif?v=1618230594598","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fusagi16.gif?v=1618230594769"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Usagi Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["usagigif"],
  permLevel: 0
};

exports.help = {
  name: "usagi-gif",
  description: "Rasgele Usagi Gif Atar!",
  usage: ""
};
//izexlesh