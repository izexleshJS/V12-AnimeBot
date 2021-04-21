const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka.gif?v=1618224997992","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka2.gif?v=1618225016199","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka3.gif?v=1618225031226","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka4.gif?v=1618225046648","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka5.webp?v=1618225067334","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka6.gif?v=1618225081459","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka7.gif?v=1618225097648","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka8.gif?v=1618225104087","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka9.webp?v=1618225125838","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka10.webp?v=1618225126457","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka11.gif?v=1618225151065","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka12.gif?v=1618225152239","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka14.gif?v=1618225186618","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka13.gif?v=1618225186985","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka15.gif?v=1618225249249","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fshouka16.gif?v=1618225256508"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Shouka Nishimiya Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shoukagif"],
  permLevel: 0
};

exports.help = {
  name: "shouka-gif",
  description: "Rasgele Shouka Gif Atar!",
  usage: ""
};
//izexlesh