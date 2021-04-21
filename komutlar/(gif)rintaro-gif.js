const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins.gif?v=1618238640070","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins2.gif?v=1618238640178","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins3.gif?v=1618238643630","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins4.gif?v=1618238694918","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins9.gif?v=1618238696234","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins5.gif?v=1618238696526","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins6.gif?v=1618238730029","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins7.gif?v=1618238732119","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins8.gif?v=1618238732677","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins12.gif?v=1618238770126","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins10.gif?v=1618238770850","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins11.gif?v=1618238771312","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins13.gif?v=1618238798338","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins14.gif?v=1618238798557","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins15.webp?v=1618238800136","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fsteins16.gif?v=1618238825293"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Rintaro Okabe Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rintarogif"],
  permLevel: 0
};

exports.help = {
  name: "rintaro-gif",
  description: "Rasgele Rintaro Gif Atar!",
  usage: ""
};
//izexlesh