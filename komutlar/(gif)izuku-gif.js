const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku5.gif?v=1618240822982","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku.gif?v=1618240823511","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku2.gif?v=1618240830468","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku4.gif?v=1618240830469","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku3.gif?v=1618240830689","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku7.jpg?v=1618240887288","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku9.jpg?v=1618240887288","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku11.gif?v=1618240889319","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku6.gif?v=1618240891522","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku8.gif?v=1618240892025","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku10.gif?v=1618240896550","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku12.gif?v=1618240941840","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku14.gif?v=1618240942077","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fizuku13.gif?v=1618240942911"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Izuku Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izukugif"],
  permLevel: 0
};

exports.help = {
  name: "izuku-gif",
  description: "Rasgele Levi Gif Atar!",
  usage: ""
};
//izexlesh