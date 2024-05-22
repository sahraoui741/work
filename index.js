const express = require("express")
const app = express();
const keep_alive = require('./keep_alive.js')

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

const { joinVoiceChannel } = require('@discordjs/voice');
const { blobFrom } = require("node-fetch");
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 

client.login(process.env.token);
//هتروح على السيكريت و تكتب token و تححط توكن حسابك و تسوي كمان واحد بس ذي المره اسمه channel و تحط ايدي الروم الصوتي اللي تبي يتثبت فيها حسابك