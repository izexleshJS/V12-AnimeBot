
const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {  
let id = "310429317140316173" //Buraya kendi idni gir!
let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
if(message.author.id !== "310429317140316173") return message.channel.send("<:carpitik:831644035637575741> Bu Komutu Sadece \`izexlesh\` Kullanabilir");
if(!args[0]) return message.channel.send("Lütfen **aç** veya **kapat** yazınız.\nKullanıcının karaliste bilgisini görmek için **bilgi** kullanın ör:`.blacklist bilgi `")
switch(args[0]) {
  case "aç":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın!")
    if(user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz!")
    db.set(`cokaradalistere_${user.id}`, true)
    message.channel.send(`\`${user.tag}\` **Artık botu kullanamayacak.** <:carpitik:831644035637575741>`)
    break;
  case "kapat":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın!")
    if(user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz!")
    db.delete(`cokaradalistere_${user.id}`)
    message.channel.send(`\`${user.tag}\` **Artık botu kullanabilir.** <:bottik:831643887197880361>`)
    break;
  case "bilgi":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın!")
let i = db.fetch(`cokaradalistere_${user.id}`)
      if(i == true) message.channel.send(`\`${user.tag}\` Botu şu anda **kullanamıyor.** <:carpitik:831644035637575741>`)
      else message.channel.send(`\`${user.tag}\` Botu şu anda **kullanabiliyor.** <:bottik:831643887197880361>`)
    break;
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 0,
  kategori: "geliştirici"
};

exports.help = { 
	name: 'blacklist', 
	description: 'Belirlenen kişinin botu kullanmasını engeller.', 
  usage: 'blacklist  '
};
//izexlesh
