module.exports= {
    name: 'pong',
    description: 'This is a ponf command',
    execute(message, args){
        message.channel.send('ping!');
    }
}