const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku2.gif?v=1618238028309","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku3.webp?v=1618238029114","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku.gif?v=1618238035332","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku4.gif?v=1618238066371","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku5.gif?v=1618238067035","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku6.gif?v=1618238067941","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku7.gif?v=1618238102060","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku8.gif?v=1618238103039","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku9.gif?v=1618238103491","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku10.gif?v=1618238131164","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku12.gif?v=1618238132232","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku11.gif?v=1618238132305","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku13.gif?v=1618238169654","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku15.jpg?v=1618238169655","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fgoku14.gif?v=1618238170007"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Goku Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gokugif"],
  permLevel: 0
};

exports.help = {
  name: "goku-gif",
  description: "Rasgele Levi Gif Atar!",
  usage: ""
};
//izexlesh