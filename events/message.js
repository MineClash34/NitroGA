module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) === 0 && message.channel.type !== "dm") 
    {
        let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
        let command = args.shift().toLowerCase();
        let cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message, args);
    };
};