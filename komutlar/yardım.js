const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://media.discordapp.net/attachments/730505539343089815/730508645166743612/322deae8-c50e-4ad8-a7d2-ff13f650466d2Ftenor.gif"
    )
    .setDescription(
      `bu bot MrUtkuE tarafından yapılmıştır` +
        "\n\n `m!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `m!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **dark Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/EZWK3aERYX) \n >  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=889189513748951050&scope=bot&permissions=8589934591) \n > » [bakımda]() `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
