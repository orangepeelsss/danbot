const Discord = require('discord.js');

const client = new Discord.Client();

const prefix= '-';

const fs = require('fs');
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');

client.commands =  new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file }`);
    
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Dan is now online!')
    client.user.setActivity('the babes', {type: 'WATCHING'}).catch(console.error);
    
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length);
    const command = args.toLowerCase();

    

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'omg'){
        client.commands.get('omg').execute(message, args);
    } else if (command == 'smirk'){
        client.commands.get('smirk').execute(message, args);
    //} else if (command == "gorr"){
    //    client.commands.get('gorr').execute(message, args);
    } else if (command == 'russell'){
        client.commands.get('russell').execute(message, args);
    }

});

    

client.login('NzU1ODYxNzcyNDkzMTI3ODI5.X2JdIQ.2YfHIVrZyU4le9vmjD2WVq_ugWo');
