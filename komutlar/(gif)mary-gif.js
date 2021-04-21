const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary.jpg?v=1618240299241","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary5.gif?v=1618240301829","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary4.gif?v=1618240303352","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary2.gif?v=1618240303710","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary3.gif?v=1618240304702","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary9.gif?v=1618240450384","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary7.gif?v=1618240451539","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary10.gif?v=1618240452662","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary11.gif?v=1618240454591","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary8.gif?v=1618240458411","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary6.gif?v=1618240460309","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary14.webp?v=1618240521107","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary13.gif?v=1618240521760","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fmary12.gif?v=1618240521843"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Mary Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["marygif"],
  permLevel: 0
};

exports.help = {
  name: "mary-gif",
  description: "Rasgele Luffy Gif Atar!",
  usage: ""
};
//izexlesh