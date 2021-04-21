const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno.gif?v=1618239795445","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno2.gif?v=1618239795550","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno4.gif?v=1618239795684","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno3.gif?v=1618239796038","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno5.gif?v=1618239797098","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno6.jpg?v=1618239840037","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno7.gif?v=1618239841830","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno8.gif?v=1618239842277","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno9.gif?v=1618239843231","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno10.gif?v=1618239844508","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno11.gif?v=1618239845145","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno12.gif?v=1618239897747","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno13.gif?v=1618239898583","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fyuno14.gif?v=1618239898734"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Yuno Gasai Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yunogif"],
  permLevel: 0
};

exports.help = {
  name: "yuno-gif",
  description: "Rasgele Yuno Gif Atar!",
  usage: ""
};
//izexlesh