const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy1.gif?v=1618228894149","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy2.gif?v=1618228909826","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy3.gif?v=1618228921716","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy4.gif?v=1618228922964","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy5.gif?v=1618228942655","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy6.gif?v=1618228957913","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy7.gif?v=1618228958780","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy8.gif?v=1618228980596","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy9.gif?v=1618228981089","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy10.gif?v=1618229002738","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy11.webp?v=1618229003239","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy12.gif?v=1618229023043","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy13.gif?v=1618229023044","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy14.gif?v=1618229044956","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy16.gif?v=1618229045583","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fluffy15.gif?v=1618229045806"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Luffy Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["luffygif"],
  permLevel: 0
};

exports.help = {
  name: "luffy-gif",
  description: "Rasgele Luffy Gif Atar!",
  usage: ""
};
//izexlesh