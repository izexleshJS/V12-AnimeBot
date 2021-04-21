const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fnaruto2.gif?v=1618216674824","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fnaruto3.gif?v=1618216721046","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fnaruto4.gif?v=1618216886934","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fnaruto5.gif?v=1618216906417","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto7.gif?v=1618216921475","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto8.gif?v=1618216936477","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto9.gif?v=1618216953349","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto10.gif?v=1618216968423","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto11.gif?v=1618216981178","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto15.gif?v=1618216995595","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto16.gif?v=1618217010013","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto17.gif?v=1618217023931","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto18.gif?v=1618217064746","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto19.gif?v=1618217080487","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto20.gif?v=1618217094214","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto21.gif?v=1618217109215","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto22.gif?v=1618217123400","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto23.gif?v=1618217142549","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto24.gif?v=1618217155242","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto26.gif?v=1618217166838","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto12.gif?v=1618217179309","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto13.gif?v=1618217192888","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto14.gif?v=1618217209891","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2FNaruto6.gif?v=1618217222529"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Naruto Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["narutogif"],
  permLevel: 0
};

exports.help = {
  name: "naruto-gif",
  description: "Rasgele Naruto Gif Atar!",
  usage: ""
};
//izexlesh