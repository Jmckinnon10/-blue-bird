const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports.notifier = () => {
  /* twilio integration example/demo 
    - call dynamo db to get phone numbers
    - get weather data from weather api
    - send text message to each phone number
    */

  client.messages
    .create({
      body: "Thank you for subscribing to Blue Bird!",
      from: "+12282564897",
      to: "+16176945102",
    })
    .then((message) => console.log(message.sid));
};
