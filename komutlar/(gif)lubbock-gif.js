const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock.gif?v=1618241287929","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock4.gif?v=1618241289299","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock5.gif?v=1618241291299","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock3.gif?v=1618241293051","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock2.gif?v=1618241293217","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock10.gif?v=1618241338258","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock6.gif?v=1618241338334","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock8.gif?v=1618241338476","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock11.gif?v=1618241338965","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock9.gif?v=1618241340766","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock7.gif?v=1618241340972","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock15.gif?v=1618241382799","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock14.gif?v=1618241384635","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock13.gif?v=1618241385792","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flubbock12.gif?v=1618241393016"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Lubbock Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lubbockgif"],
  permLevel: 0
};

exports.help = {
  name: "lubbock-gif",
  description: "Rasgele Levi Gif Atar!",
  usage: ""
};
//izexlesh