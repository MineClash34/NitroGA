const Discord = require("discord.js")
const client = new Discord.Client()//https://discordapp.com/oauth2/authorize?client_id=650048176577052683&scope=bot&permissions=8
const config = require("./Config.json")
const prefix = config.prefix
const Enmap = require("enmap");
const fs = require("fs");
client.login(config.token)

/*Export De Config*/

client.config = config;

/*Création des events*/

fs.readdir("./events/", (err, files) => 
{
  if (err) return console.error(err);
  files.forEach(file => 
    {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

/*Création et enregistrement des commandes*/

client.commands = new Enmap();

fs.readdir("./commandes/", (err, file) => 
{
  if (err) return console.error(err);
    file.forEach(file => 
      {
    if (!file.endsWith(".js")) return;
    let props = require(`./commandes/${file}`);
    let commandName = file.split(".js")[0];
    console.log(`Chargement de la commande : ${commandName} en cours`);
    client.commands.set(commandName, props); 
  });
  });