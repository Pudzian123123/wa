const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

//   _____ __  __ _____    _    _          _   _ _____  _      ______ _____  
//  / ____|  \/  |  __ \  | |  | |   /\   | \ | |  __ \| |    |  ____|  __ \ 
// | |    | \  / | |  | | | |__| |  /  \  |  \| | |  | | |    | |__  | |__) |
// | |    | |\/| | |  | | |  __  | / /\ \ | . ` | |  | | |    |  __| |  _  / 
// | |____| |  | | |__| | | |  | |/ ____ \| |\  | |__| | |____| |____| | \ \ 
//  \_____|_|  |_|_____/  |_|  |_/_/    \_\_| \_|_____/|______|______|_|  \_\
                                                                         

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler=> {

  require(`./handlers/${handler}`)(client);


});

client.login("TOKEN");
