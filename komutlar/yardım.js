const Discord = require(`discord.js`)
exports.run = async(client, message, args) => {

    const izexlesh = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor(`${client.user.username} `, client.user.avatarURL()) 
      .setDescription('Detaylı yardım almak için **.yardım**\n Örnek komut kullanımı: **.anime**.\n Botumuzu davet etmek için **.davet** ')
      .addField('** ❯ Anime Komutları (2)**', `Herkesin kullanabileceği **Anime** komutları. \n` +  '`anime`, `anime-tavsiye`')
      .addField('** ❯ Anime Gif Komutları (13)**', `Herkesin kullanabileceği **Anime Gif** komutları. \n` +  '`anime-gif`, `naruto-gif`, `shouka-gif`, `luffy-gif`, `levi-gif`,\n `usagi-gif`, `goku-gif`, `rintaro-gif`, `edward-gif`, `yuno-gif`,\n `mary-gif`, `izuku-gif`, `lubbock-gif`')
      .addField('** ❯ NSFW(+18) Komutları (9)**',   `Herkesin kullanabileceği **NSFW** komutları. \n` + '`anal`, `4k`, `ass`, `pgif`, `pussy`, `hkitsune`, `neko`, `hneko`, `holo`')
      .addField('** ❯ Sahip Komutları (3)**',`Bot **Sahibinin** kullanabileceği komutlar. \n` +  '`reebot`, `karaliste`, `eval`')
      .addField('** ❯ Diğer Komutlar (4)**',`Herkesin kullanabileceği **Diğer** komutlar. \n` +  '`istatistik`, `ping`, `davet`, `avatar`, `komutsay`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL())
    .setImage("https://cdn.glitch.com/c6cee48d-284b-4dfe-93d2-4427ef042d5b%2F92fd31b9becf4ecccfcce765db9d6d02.gif?v=1618351365136")
    .setTimestamp()
    message.channel.send(izexlesh).catch()

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","h","y"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü!",
  usage: ""
};



