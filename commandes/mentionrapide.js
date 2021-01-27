exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Entrez un message après la commande s'il vous plaît !").then((nomessagereply) => 
    {
        setTimeout(function() 
        {
            nomessagereply.delete();
            message.delete();
        }, 5000);
    });
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    var channel = message.mentions.channels.first();
    if (!channel) 
    {
    var role = message.guild.roles.find(role => role.id === "634615509966651411");
    role.setMentionable(true).then(() => 
    {
    message.channel.send("<@&634615509966651411>\n" + args.join(" ")).then(() => 
    {
    role.setMentionable(false);
    message.delete();
    });
    });
} 
else
{
    args.shift();
    var channelSend = client.channels.get(channel.id);
    var role = message.guild.roles.find(role => role.id === "634615509966651411");
    role.setMentionable(true).then(() => 
    {
        channelSend.send("<@&634615509966651411>\n" + args.join(" ")).then(() => 
    {
        role.setMentionable(false);
        message.delete();
    });
    });
};
};