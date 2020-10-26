const
    { RichEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('./config.json'),
    client = new Client({ autoReconnect: true, disableEveryone: true }),
    connection = db.createConnection({ host: config.host, user: config.user, password: config.password, database: config.database })
    connection.connect();
    
    client.commands = new Collection();
    client.aliases = new Collection();
    
    client.connection = connection;

    fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdirSync('./src/').filter(file => file.endsWith('.js')).forEach(file => {
    let props = require(`./src/${file}`);
    client.commands.set(require(`./src/${file}`).cmd.name, require(`./src/${file}`));
})

client.login(config.token)
