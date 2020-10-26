let db = require('mysql'), config = require('../config.json')

module.exports = async (client,message,guild) => {
client.connection.query(`SELECT * FROM eco WHERE id = ${message.author.id}`, async (err, row) => {
  if(!row[0]){
    client.connection.query(`INSERT INTO eco(id,money,xp,lvl) VALUES (${message.author.id},0,0,0)`) 
  }
})
  await client.connection.query(`SELECT * FROM eco WHERE id = ${message.author.id}`, async (err, row) =>{
if(row[0].id){
    client.connection.query(`UPDATE eco SET money = ${parseInt(row[0].money) + parseInt(1)} WHERE id = ${message.author.id}`) // прибавляем +1 монет
    client.connection.query(`UPDATE eco SET xp = ${parseInt(row[0].xp) + parseInt(1)} WHERE id = ${message.author.id}`) // прибавляем +1 xp
    if(row[0].xp >= 100) { // если х больше чем 100 или равняется 100 то выполняет действия ниже
      message.react('🆙') // ставит реакцию на сообщение при новом уровне
      client.connection.query(`UPDATE eco SET xp = '0' WHERE id = ${message.author.id}`) // ставит значение 0 xp
      client.connection.query(`UPDATE eco SET lvl = ${parseInt(row[0].xp) + parseInt(1)} WHERE id = ${message.author.id}`) // добавляет +1 в уровню
    }
  }
})

setTimeout(async()=>{ // необходимо, избежании багов при добавления на сервер
  await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
let
  prefix = row[0].prefix || config.prefix,
  lang = row[0].lang || 'en',
  l = require(`../languages/lang.${lang}.json`),
  msg = l.client.split('|')
    if(message.content.toLowerCase() === `<@!${client.user.id}>`){
      message.channel.send(`>>> ${msg[0]} **${lang}**\n${msg[1]} **${prefix}**`)
      }

if(!message.content.startsWith(prefix)) return
let 
  messageArray = message.content.split(/ +/g),
  command = messageArray[0].toLowerCase(),
  args = messageArray.slice(1),
  cmd = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
  if(cmd) cmd.run(client,message,args);
  })
 },1000) 
}
