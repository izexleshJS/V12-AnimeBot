const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

let izexreplies = ["https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward.gif?v=1618239121159","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward2.gif?v=1618239127638","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward3.gif?v=1618239128227","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward4.gif?v=1618239131427","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward5.gif?v=1618239162521","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward6.gif?v=1618239162875","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward7.gif?v=1618239163891","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward8.gif?v=1618239166037","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward9.gif?v=1618239208826","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward10.gif?v=1618239208957","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward11.gif?v=1618239236404","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward13.gif?v=1618239237606","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward14.gif?v=1618239239150","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward12.gif?v=1618239239529","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward16.gif?v=1618239274055","https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2Fedward15.gif?v=1618239274055"];
let izexresult = Math.floor((Math.random() * izexreplies.length));
let izexlesh = new Discord.MessageEmbed()

.setTitle("| Edward Gif |")
.setColor("#ff0000")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(izexreplies[izexresult]);
message.channel.send(izexlesh);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["edwardgif"],
  permLevel: 0
};

exports.help = {
  name: "edward-gif",
  description: "Rasgele Levi Gif Atar!",
  usage: ""
};
//izexlesh