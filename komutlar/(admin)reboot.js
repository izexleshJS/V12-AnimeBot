const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(message.author.id !== "310429317140316173") return message.channel.send("<:carpitik:831644035637575741> Bu Komutu Sadece \`izexlesh\` Kullanabilir");
message.delete();
message.channel.send(new Discord.MessageEmbed().setColor('ff0000').setTitle('Reboot;').setDescription('Eğer Kabul Ediyorsan => `onay` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL()).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.MessageEmbed().setColor('ff0000').setTitle('Reboot;').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('TheRenk', client.user.avatarURL()).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.MessageEmbed().setColor('ff0000').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('TheRenk', client.user.avatarURL()).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};
//izexlesh