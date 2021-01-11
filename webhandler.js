const { bot } = require('./bot.js');
module.exports.hello = async event => {//we use this to get updates 
    // using a try/catch block
    try {
      // process event data
      const body = JSON.parse(event.body);

      // bot handles processed data from the event body
      await bot.handleUpdates(body);

      // return an Ok response
    } catch (err) {
      // handle any errors

      // return any Err responses
    }
}
module.exports.setWebhook = async event => {//webhook setup
    // using a try/catch block
    try {
      // process webhook url based on event data
      let url = 'https://' + event.headers.Host + '/' + event.requestContext.stage
        + '/webhook';

      // use bot methods to set the webhook url
      await bot.telegram.setWebhook(url);

      // return an Ok response
    } catch (err) {
      // handle any errors

      // return any Err responses
    }
}