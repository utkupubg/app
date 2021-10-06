const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bana Oyver ")
  .setDescription("[__**Botlist**__]()")
  .setFooter('bu komut deaktiftir')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: '',
  usage: ''
};