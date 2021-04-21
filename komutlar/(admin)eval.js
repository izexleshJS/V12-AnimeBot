const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const db = require('quick.db');
const Jimp = require('jimp')
 
exports.run = (client, message, args) => {
   if(message.author.id !== "310429317140316173") return message.channel.send("<:carpitik:831644035637575741> Bu Komutu Sadece \`izexlesh\` Kullanabilir");
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let izex = new Discord.MessageEmbed()
                            .addField("Giriş","```js\n" + code + "```")
                            .setDescription("```js\n" + clean(evaled) + "```")
if (izex.description.length >= 2048)
      izex.description = izex.description.substr(0, 2042) + "```...";
    return message.channel.send(izex)
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
//izexlesh