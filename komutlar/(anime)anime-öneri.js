const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guild) => {
  let davet;
  if (message.channel.permissionsFor(bot.user).has("CREATE_INSTANT_INVITE")) {
    await message.channel
      .createInvite({ temporary: false, maxAge: 0, maxUses: 0, unique: false })
      .then(i => {
        davet = i.url;
      });
  } else
    davet = "Sunucuda davet linkini almak için yeterli yetkim yoktu alamadım.";
  const tavsiye = args.join(" ").slice(0);
  const tavsiyeSahibi = message.author;
  const tavsiyeKanal = bot.channels.cache.find(
    id => id == "830904261935890442"
  ); //kanal id girin
  if (!tavsiye)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Anime tavsiyeni girmedin! Doğru kullanım: `.anime-tavsiye`")
        .setColor("#ff0000")
    );
  if (tavsiye)
    return tavsiyeKanal
      .send(
        new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle(`${tavsiyeSahibi.tag} Tarafından yeni bir tavsiye geldi!`)
          .addField(
            `Bilgiler`,
            `ID: ${tavsiyeSahibi.id}\nKullanıcı Adı: ${tavsiyeSahibi.tag}\nAnime tavsiyesinin Geldiği Sunucu: **${message.guild.name}**\nDavet Linki: ${davet}`
          )
          .addField(`Anime Tavsiyesi:`, `${tavsiye}`)
          .setFooter(
            `Sende görüşünü belirtmek için alttaki emojilerden birine basabilirsin.`
          )
      )
      .then(msg => {
        msg.react("✅").then(r => msg.react("❎"));
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(
              "Anime Tavsiyeniz Başarıyla [Destek Sunucumuza](https://discord.gg/zhG7bkVg5r) gönderildi! ☑️"
            )
        );
      });
};

module.exports.help = {
  name: "tavsiye"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anime-öneri","anime-tavsiye","animetavsiye"],
  permLevel: 0
};

exports.help = {
  name: "anime tavsiye",
  description: "Sizler Anime Önerirsiniz",
  usage: "tavsiye"
};
//izexlesh
