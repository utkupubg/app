const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" darkbot v12 sürümüyle sizlerle")
.setTitle(" ➤darkbot Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **m!ping** : Botun pingini gösterir \n  **m!forceban** \n  **m!ban** \n **m!unban** \n **m!id** \n **m!küfür** \n **m!is** \n **m!sa-as** \n **m!kick** \n **m!sunucubilgi** \n **m!sil** \n **m!profil** \n **m!token** \n **m!yetkilerim** \n **m!link** \n  **m!üyedurum**\n **m!afk** \n **m!davet** ")
.setImage("https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}