module.exports = {
    name: 'messageReactionAdd',
    execute(messageReaction) {
        console.log(messageReaction);
        messageReaction.message.react('😄');

    },
};