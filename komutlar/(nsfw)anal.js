const Discord = require("discord.js");
module.exports.run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Bu komutu sadece **NSFW** kanalında kullanabilirsin!') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Veuillez patienter...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

            var izex_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[Resim yüklenmiyor mu? buraya Tıkla](${response.body.message})**`)
                .setColor("ff0000")
                .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(izex_nsfw);
        });
    });
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'anal'
};