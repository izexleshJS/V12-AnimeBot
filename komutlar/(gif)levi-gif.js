const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi.gif?v=1618229422902","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi2.gif?v=1618229426034","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi3.gif?v=1618229447745","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi4.gif?v=1618229453545","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi5.gif?v=1618229476960","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi6.gif?v=1618229478253","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi7.gif?v=1618229511221","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi8.gif?v=1618229513573","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi9.gif?v=1618229537458","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi10.webp?v=1618229539050","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi11.jpg?v=1618229562293","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi12.gif?v=1618229564252","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi13.webp?v=1618229565231","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi14.gif?v=1618229621052","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi16.gif?v=1618229621304","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Flevi15.gif?v=1618229623272"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Levi Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["levigif"],
  permLevel: 0
};

exports.help = {
  name: "levi-gif",
  description: "Rasgele Levi Gif Atar!",
  usage: ""
};
//izexlesh