const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on('/fredag', (ctx) => {
    // resend existing file by file_id
    ctx.replyWithSticker('AADBAADCwADQH0BFCXkUVUYJnY1Ag')})
    
module.exports = {
        bot
    }
